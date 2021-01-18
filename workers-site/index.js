import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler'

/**
 * The DEBUG flag will do two things that help during development:
 * 1. we will skip caching on the edge, which makes it easier to
 *    debug.
 * 2. we will return an error message on exception in your Response rather
 *    than the default 404.html page.
 */
const DEBUG = false

addEventListener('fetch', event => {
  try {
    event.respondWith(handleEvent(event))
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        }),
      )
    }
    event.respondWith(new Response('Internal Error', { status: 500 }))
  }
})

async function handleEvent(event) {
  
  const url = new URL(event.request.url)
  let options = {}

  /**
   * You can add custom logic to how we fetch your assets
   * by configuring the function `mapRequestToAsset`
   */
  // options.mapRequestToAsset = handlePrefix(/^\/docs/)

  try {
    if (DEBUG) {
      // customize caching
      options.cacheControl = {
        bypassCache: true,
      }
    }

    // fetch response to modify headers
    const resp = await getAssetFromKV(event, options)

    // set content type based on extension
    // full list of options at link below
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
    if (url.pathname.endsWith(".css")) {
      resp.headers.set("Content-Type", "text/css; charset=utf-8")
    } else if (url.pathname.endsWith(".csv")) {
      resp.headers.set("Content-Type", "text/csv")
    } else if (url.pathname.endsWith(".eot")) {
      resp.headers.set("Content-Type", "application/vnd.ms-fontobject")
    } else if (url.pathname.endsWith(".gif")) {
      resp.headers.set("Content-Type", "image/gif")
    } else if (url.pathname.endsWith(".ico")) {
      resp.headers.set("Content-Type", "application/vnd.microsoft.icon")
    } else if (url.pathname.endsWith(".jpg") || url.pathname.endsWith(".jpeg")) {
      resp.headers.set("Content-Type", "image/jpeg")
    } else if (url.pathname.endsWith(".js")) {
      resp.headers.set("Content-Type", "text/javascript; charset=utf-8")
    } else if (url.pathname.endsWith(".json")) {
      resp.headers.set("Content-Type", "application/json")
    } else if (url.pathname.endsWith(".jsonld")) {
      resp.headers.set("Content-Type", "application/ld+json")
    } else if (url.pathname.endsWith(".png")) {
      resp.headers.set("Content-Type", "image/png")
    } else if (url.pathname.endsWith(".pdf")) {
      resp.headers.set("Content-Type", "application/pdf")
    } else if (url.pathname.endsWith(".svg")) {
      resp.headers.set("Content-Type", "image/svg+xml" )
    } else if (url.pathname.endsWith(".ttf")) {
      resp.headers.set("Content-Type", "font/ttf")
    } else if (url.pathname.endsWith(".woff")) {
      resp.headers.set("Content-Type", "font/woff")
    } else if (url.pathname.endsWith(".woff2")) {
      resp.headers.set("Content-Type", "font/woff2")
    } else if (url.pathname.endsWith(".xml")) {
      resp.headers.set("Content-Type", "text/xml")
    } else if (url.pathname.endsWith(".zip")) {
      resp.headers.set("Content-Type", "application/zip")
    } else {
      // default text/html if no match
      resp.headers.set("Content-Type", "text/html; charset=utf-8")
    }

    // set security headers
    resp.headers.set("Access-Control-Allow-Origin", "https://cloudflareinsights.com")
    resp.headers.set("Content-Security-Policy", "default-src 'self'; script-src 'self' https://static.cloudflareinsights.com; connect-src 'self' https://cloudflareinsights.com; frame-src https://www.youtube-nocookie.com; img-src 'self' https://i.ytimg.com")
    resp.headers.set("Permissions-Policy", "fullscreen(self)")
    resp.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
    resp.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload")
    resp.headers.set("Vary", "Origin")
    resp.headers.set("X-Xss-Protection", "1; mode=block")
    resp.headers.set("X-Frame-Options", "DENY")
    resp.headers.set("X-Content-Type-Options", "nosniff")
    
    // return response
    return resp
  } catch (e) {
    // if an error is thrown try to serve the asset at 404.html
    if (!DEBUG) {
      try {
        let notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req),
        })

        return new Response(notFoundResponse.body, { ...notFoundResponse, status: 404 })
      } catch (e) {}
    }

    return new Response(e.message || e.toString(), { status: 500 })
  }
}
