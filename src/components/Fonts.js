import React from "react";
import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family:"houschka-rounded-light";
        src:url("https://use.typekit.net/af/d87321/00000000000000007735a92a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/d87321/00000000000000007735a92a/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/d87321/00000000000000007735a92a/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:300;
        }
        
        @font-face {
        font-family:"houschka-rounded-thin";
        src:url("https://use.typekit.net/af/3110c2/00000000000000007735a92d/30/l?subset_id=2&fvd=n2&v=3") format("woff2"),url("https://use.typekit.net/af/3110c2/00000000000000007735a92d/30/d?subset_id=2&fvd=n2&v=3") format("woff"),url("https://use.typekit.net/af/3110c2/00000000000000007735a92d/30/a?subset_id=2&fvd=n2&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:200;
        }
        
        @font-face {
        font-family:"houschka-rounded-extrabold";
        src:url("https://use.typekit.net/af/81de21/00000000000000007735a944/30/l?subset_id=2&fvd=n8&v=3") format("woff2"),url("https://use.typekit.net/af/81de21/00000000000000007735a944/30/d?subset_id=2&fvd=n8&v=3") format("woff"),url("https://use.typekit.net/af/81de21/00000000000000007735a944/30/a?subset_id=2&fvd=n8&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:800;
        }
        
        @font-face {
        font-family:"houschka-rounded-medium";
        src:url("https://use.typekit.net/af/b49330/00000000000000007735a94a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/b49330/00000000000000007735a94a/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/b49330/00000000000000007735a94a/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:500;
        }
        
        @font-face {
        font-family:"houschka-rounded-bold";
        src:url("https://use.typekit.net/af/ccbca9/00000000000000007735a950/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/ccbca9/00000000000000007735a950/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/ccbca9/00000000000000007735a950/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:700;
        }
        
        @font-face {
        font-family:"houschka-rounded-demibold";
        src:url("https://use.typekit.net/af/bbc4b8/00000000000000007735a963/30/l?subset_id=2&fvd=n6&v=3") format("woff2"),url("https://use.typekit.net/af/bbc4b8/00000000000000007735a963/30/d?subset_id=2&fvd=n6&v=3") format("woff"),url("https://use.typekit.net/af/bbc4b8/00000000000000007735a963/30/a?subset_id=2&fvd=n6&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:600;
        }
        
        .tk-houschka-rounded { font-family: "houschka-rounded",sans-serif; }
      `}
  />
)

export default Fonts