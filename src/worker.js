addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    const url = new URL(request.url)
    const { pathname } = url
  
    if (pathname === '/generate-signed-url') {
      const { S3 } = require('aws-sdk')
      const r2 = new S3({
        endpoint: 'https://54d2bb9046e4bf7bf02628a8493eb8e.r2.cloudflarestorage.com',
        accessKeyId: '22143297735b69193f60840ce97993',
        secretAccessKey: 'c31d6b51fb2642ee020623a5495b405dea418ed2e1c5845fb8825224bfbc2f4',
        region: 'auto',
        signatureVersion: 'v4',
      })
  
      const params = {
        Bucket: 'rtr-presskit',
        Key: 'presskit.zip',
        Expires: 60 * 60, // Link expires in 1 hour
      }
  
      try {
        const signedUrl = r2.getSignedUrl('getObject', params)
        return new Response(JSON.stringify({ url: signedUrl }), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://presskit.rtr-site.pages.dev', // Allow your frontend origin
          },
        })
      } catch (error) {
        return new Response('Error generating signed URL', { status: 500 })
      }
    }
  
    return new Response('Not Found', { status: 404 })
  }