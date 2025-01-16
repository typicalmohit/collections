// Define interfaces first
export interface Resource {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

export interface Subgroup {
  title: string;
  resources: Resource[];
}

export interface MainGroup {
  title: string;
  subgroups: Subgroup[];
}

// Helper function for icon URLs
export function getIconUrl(url: string): string {
  // List of domains with known favicon issues
  const problematicDomains = [
    "static.makehumancommunity.org",
    "mocaplibrary.com",
    "terrain.party",
    "windmill-games.com",
    "legacy.hdri-haven.com",
    "vfxplatform.com",
    "cloud.blender.org",
    "blendervfx.com",
    "mantaflow.com",
    "appleseed-renderer.org",
    "ecycles.org",
    "cloudcompare.org",
    "gabrielgambetta.com",
    "darkfall.me",
    "theblend.media",
    "render-challenge.com",
    "sculptjanuary.com",
    "machin3.io",
    "kit-ops.com",
    "blender.today",
  ];

  try {
    const domain = new URL(url).hostname;
    if (problematicDomains.some((d) => domain.includes(d))) {
      // Return a default icon with the first letter of the domain
      const letter = domain.charAt(0).toUpperCase();
      return `https://placehold.co/96x96/333/white?text=${letter}`;
    }
    return `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=128`;
  } catch {
    return "https://placehold.co/96x96/333/white?text=3D";
  }
}

// Define all resources
const baseResources: Resource[] = [
  {
    title: "TurboSquid",
    description:
      "Professional 3D models marketplace with millions of ready-to-use assets.",
    url: "https://www.turbosquid.com/",
    imageUrl: getIconUrl("https://www.turbosquid.com/"),
  },
  {
    title: "Mixamo",
    description: "Free character animation service from Adobe.",
    url: "https://www.mixamo.com/",
    imageUrl: getIconUrl("https://www.mixamo.com/"),
  },
  {
    title: "Rokoko",
    description: "Motion capture and animation tools.",
    url: "https://www.rokoko.com/",
    imageUrl: getIconUrl("https://www.rokoko.com/"),
  },
  {
    title: "DeepMotion",
    description: "AI-powered motion capture and animation.",
    url: "https://deepmotion.com/",
    imageUrl: getIconUrl("https://deepmotion.com/"),
  },
  {
    title: "Cascadeur",
    description: "Physics-based character animation software.",
    url: "https://cascadeur.com/",
    imageUrl: getIconUrl("https://cascadeur.com/"),
  },
  {
    title: "Plask",
    description: "Browser-based motion capture and animation tool.",
    url: "https://plask.ai/",
    imageUrl: getIconUrl("https://plask.ai/"),
  },
  {
    title: "LuxCoreRender",
    description: "Open source physically based renderer.",
    url: "https://luxcorerender.org/",
    imageUrl: getIconUrl("https://luxcorerender.org/"),
  },
  {
    title: "Octane Render",
    description: "GPU-accelerated unbiased renderer.",
    url: "https://home.otoy.com/render/octane-render/",
    imageUrl: getIconUrl("https://home.otoy.com/render/octane-render/"),
  },
  {
    title: "V-Ray",
    description: "Professional rendering engine.",
    url: "https://www.chaosgroup.com/",
    imageUrl: getIconUrl("https://www.chaosgroup.com/"),
  },
  {
    title: "E-Cycles",
    description: "Optimized version of Cycles render engine.",
    url: "https://www.blendermarket.com/products/e-cycles",
    imageUrl: getIconUrl("https://www.blendermarket.com/products/e-cycles"),
  },
  {
    title: "D-NOISE",
    description: "AI-powered denoising for Blender.",
    url: "https://remingtongraphics.net/tools/d-noise/",
    imageUrl: getIconUrl("https://remingtongraphics.net/tools/d-noise/"),
  },
  {
    title: "HDRI Link",
    description: "One-click HDRI loading and management.",
    url: "https://www.hdrilink.com/",
    imageUrl: getIconUrl("https://www.hdrilink.com/"),
  },
  {
    title: "Pro Lighting Studio",
    description: "Professional lighting setups for Blender.",
    url: "https://www.blendermarket.com/products/pro-lighting-studio",
    imageUrl: getIconUrl(
      "https://www.blendermarket.com/products/pro-lighting-studio"
    ),
  },
  {
    title: "Asset Library",
    description: "Built-in asset management system in Blender.",
    url: "https://docs.blender.org/manual/en/latest/files/asset_libraries/index.html",
    imageUrl: getIconUrl(
      "https://docs.blender.org/manual/en/latest/files/asset_libraries/index.html"
    ),
  },
  {
    title: "Asset Browser",
    description: "Enhanced asset management for Blender.",
    url: "https://docs.blender.org/manual/en/latest/editors/asset_browser.html",
    imageUrl: getIconUrl(
      "https://docs.blender.org/manual/en/latest/editors/asset_browser.html"
    ),
  },
  {
    title: "Poliigon",
    description: "Professional textures, models, and HDRIs.",
    url: "https://www.poliigon.com/",
    imageUrl: getIconUrl("https://www.poliigon.com/"),
  },
  {
    title: "Mocap Library",
    description: "Free motion capture data library.",
    url: "https://mocaplibrary.com/",
    imageUrl: getIconUrl("https://mocaplibrary.com/"),
  },
  {
    title: "CGTrader",
    description:
      "Professional 3D model marketplace for VR/AR, 3D printing, and games.",
    url: "https://www.cgtrader.com/",
    imageUrl: getIconUrl("https://www.cgtrader.com/"),
  },
  {
    title: "Sketchfab",
    description:
      "Platform for sharing, buying and selling 3D models with real-time previews.",
    url: "https://sketchfab.com/",
    imageUrl: getIconUrl("https://sketchfab.com/"),
  },
  {
    title: "Thingiverse",
    description:
      "The largest 3D printing community with free downloadable designs.",
    url: "https://www.thingiverse.com/",
    imageUrl: getIconUrl("https://www.thingiverse.com/"),
  },
  {
    title: "Free3D",
    description:
      "Community platform for sharing and downloading free 3D models.",
    url: "https://free3d.com/",
    imageUrl: getIconUrl("https://free3d.com/"),
  },
  {
    title: "3D Warehouse",
    description: "SketchUp's 3D model repository for architecture and design.",
    url: "https://3dwarehouse.sketchup.com/",
    imageUrl: getIconUrl("https://3dwarehouse.sketchup.com/"),
  },
  {
    title: "GrabCAD",
    description: "Community library of CAD models for engineers and designers.",
    url: "https://grabcad.com/",
    imageUrl: getIconUrl("https://grabcad.com/"),
  },
  {
    title: "3DExport",
    description:
      "Global marketplace for 3D models, scripts, textures, and tutorials.",
    url: "https://3dexport.com/",
    imageUrl: getIconUrl("https://3dexport.com/"),
  },
  {
    title: "Clara.io",
    description:
      "Browser-based 3D modeling, rendering, and animation platform.",
    url: "https://clara.io/",
    imageUrl: getIconUrl("https://clara.io/"),
  },
  {
    title: "3dsky",
    description: "High-quality 3D models for architecture and interior design.",
    url: "https://3dsky.org/",
    imageUrl: getIconUrl("https://3dsky.org/"),
  },
  {
    title: "Adobe Stock 3D",
    description: "Premium 3D assets integrated with Adobe Creative Cloud.",
    url: "https://stock.adobe.com/3d-assets",
    imageUrl: getIconUrl("https://stock.adobe.com/3d-assets"),
  },
  {
    title: "Pinshape",
    description:
      "Community for 3D printing enthusiasts to share and sell designs.",
    url: "https://pinshape.com/",
    imageUrl: getIconUrl("https://pinshape.com/"),
  },
  {
    title: "MyMiniFactory",
    description: "Curated 3D printable objects platform with verified prints.",
    url: "https://www.myminifactory.com/",
    imageUrl: getIconUrl("https://www.myminifactory.com/"),
  },
  {
    title: "Cults3D",
    description:
      "Marketplace for 3D printing models and designs with curated collections.",
    url: "https://cults3d.com/",
    imageUrl: getIconUrl("https://cults3d.com/"),
  },
  {
    title: "NASA 3D Resources",
    description: "3D models, textures and images from NASA.",
    url: "https://nasa3d.arc.nasa.gov/",
    imageUrl: getIconUrl("https://nasa3d.arc.nasa.gov/"),
  },
  {
    title: "Autodesk Gallery",
    description: "Collection of 3D models from Autodesk software users.",
    url: "https://gallery.autodesk.com/",
    imageUrl: getIconUrl("https://gallery.autodesk.com/"),
  },
  {
    title: "3dmodels.org",
    description: "Curated collection of free and premium 3D models.",
    url: "https://3dmodels.org/",
    imageUrl: getIconUrl("https://3dmodels.org/"),
  },
  {
    title: "Archive 3D",
    description: "Free 3D models archive with a wide variety of categories.",
    url: "https://archive3d.net/",
    imageUrl: getIconUrl("https://archive3d.net/"),
  },
  {
    title: "Cadnav",
    description:
      "Free 3D models, textures, and tutorials for various industries.",
    url: "https://www.cadnav.com/",
    imageUrl: getIconUrl("https://www.cadnav.com/"),
  },
  {
    title: "RenderHub",
    description:
      "Community-driven platform for 3D assets and rendering resources.",
    url: "https://www.renderhub.com/",
    imageUrl: getIconUrl("https://www.renderhub.com/"),
  },
  {
    title: "Blendswap",
    description: "Community for sharing Blender files and assets.",
    url: "https://www.blendswap.com/",
    imageUrl: getIconUrl("https://www.blendswap.com/"),
  },
  {
    title: "Blender Market",
    description: "Marketplace for Blender addons, materials, and training.",
    url: "https://blendermarket.com/",
    imageUrl: getIconUrl("https://blendermarket.com/"),
  },
  {
    title: "Poly Haven",
    description: "Free high quality 3D assets for everyone under CC0 license.",
    url: "https://polyhaven.com/models",
    imageUrl: getIconUrl("https://polyhaven.com/models"),
  },
  {
    title: "Quixel Megascans",
    description:
      "World's largest photogrammetry 2D and 3D asset library, free for Epic Games accounts.",
    url: "https://quixel.com/megascans",
    imageUrl: getIconUrl("https://quixel.com/megascans"),
  },
  {
    title: "Scan the World",
    description:
      "Community-built initiative sharing 3D printable sculpture and cultural artefacts.",
    url: "https://www.myminifactory.com/scantheworld",
    imageUrl: getIconUrl("https://www.myminifactory.com/scantheworld"),
  },
  {
    title: "Artec 3D",
    description: "Download high resolution 3D scans for free.",
    url: "https://www.artec3d.com/3d-models",
    imageUrl: getIconUrl("https://www.artec3d.com/3d-models"),
  },
  {
    title: "Blender Boom",
    description: "3D model repository with free models ready to use.",
    url: "https://blenderboom.com/",
    imageUrl: getIconUrl("https://blenderboom.com/"),
  },
  {
    title: "Three D Scans",
    description: "Free 3D scans in .stl without copyright restrictions.",
    url: "https://threedscans.com/",
    imageUrl: getIconUrl("https://threedscans.com/"),
  },
  {
    title: "3D Digitization Smithsonian",
    description: "CC0 Photoscan Library from Smithsonian Collections.",
    url: "https://3d.si.edu/",
    imageUrl: getIconUrl("https://3d.si.edu/"),
  },
  {
    title: "Chocofur",
    description: "Premium quality 3D models & scenes with Blender addon.",
    url: "https://chocofur.com/free-3d-models",
    imageUrl: getIconUrl("https://chocofur.com/free-3d-models"),
  },
  {
    title: "TheBaseMesh",
    description:
      "Public library of over 600 base meshes with real-world scale and UV unwrapping.",
    url: "https://thebasemesh.com/",
    imageUrl: getIconUrl("https://thebasemesh.com/"),
  },
  {
    title: "3DB3",
    description: "Professional 3D models from skilled 3D artists.",
    url: "https://3db3.com/",
    imageUrl: getIconUrl("https://3db3.com/"),
  },
  {
    title: "Rigmodels",
    description: "Free rigged, animated and low poly models.",
    url: "https://rigmodels.com/",
    imageUrl: getIconUrl("https://rigmodels.com/"),
  },
  {
    title: "RockThe3D",
    description: "Blog site providing 3D related knowledge and resources.",
    url: "https://rockthe3d.com/",
    imageUrl: getIconUrl("https://rockthe3d.com/"),
  },
  {
    title: "Hum3D",
    description: "Quality 3D models of vehicles in blend file format.",
    url: "https://hum3d.com/",
    imageUrl: getIconUrl("https://hum3d.com/"),
  },
  {
    title: "FlyingArchitecture",
    description:
      "Architectural visualization studio and store for 3D models, scenes, materials and tutorials.",
    url: "https://flyingarchitecture.com/",
    imageUrl: getIconUrl("https://flyingarchitecture.com/"),
  },
  {
    title: "Free3DBase",
    description: "Download high quality free 3D models.",
    url: "https://free3dbase.com/",
    imageUrl: getIconUrl("https://free3dbase.com/"),
  },
  {
    title: "RenderHub",
    description: "Daz Content, 3D models, textures and materials.",
    url: "https://www.renderhub.com/free-3d-models",
    imageUrl: getIconUrl("https://www.renderhub.com/free-3d-models"),
  },
  {
    title: "KitBash3d",
    description:
      "Premium 3D assets for VFX, concept art and design. Get Mini Kit: Neo City for free.",
    url: "https://kitbash3d.com/",
    imageUrl: getIconUrl("https://kitbash3d.com/"),
  },
  {
    title: "Poly Haven Textures",
    description:
      "High quality scanned textures available for free under CC0 license.",
    url: "https://polyhaven.com/textures",
    imageUrl: getIconUrl("https://polyhaven.com/textures"),
  },
  {
    title: "ambientCG",
    description:
      "Hundreds of PBR materials and textures for free under the Public Domain license.",
    url: "https://ambientcg.com/",
    imageUrl: getIconUrl("https://ambientcg.com/"),
  },
  {
    title: "cgbookcase",
    description:
      "Library of high-quality PBR textures, free for every purpose.",
    url: "https://cgbookcase.com/",
    imageUrl: getIconUrl("https://cgbookcase.com/"),
  },
  {
    title: "3DAssets.one",
    description:
      "Search engine exploring largest free texture sites all at once.",
    url: "https://3dassets.one/",
    imageUrl: getIconUrl("https://3dassets.one/"),
  },
  {
    title: "3DTextures.me",
    description: "Free seamless PBR textures for 3D artists.",
    url: "https://3dtextures.me/",
    imageUrl: getIconUrl("https://3dtextures.me/"),
  },
  {
    title: "FreePBR",
    description: "Free PBR materials and texture files.",
    url: "https://freepbr.com/",
    imageUrl: getIconUrl("https://freepbr.com/"),
  },
  {
    title: "ShareTextures",
    description: "Free High Quality Material Archive for everybody.",
    url: "https://sharetextures.com/",
    imageUrl: getIconUrl("https://sharetextures.com/"),
  },
  {
    title: "Texture.Ninja",
    description: "Public domain photographic textures and reference images.",
    url: "https://texture.ninja/",
    imageUrl: getIconUrl("https://texture.ninja/"),
  },
  {
    title: "3DXO",
    description:
      "Free 3D Models, seamless Textures, Backgrounds, Photos & Graphics.",
    url: "https://3dxo.com/",
    imageUrl: getIconUrl("https://3dxo.com/"),
  },
  {
    title: "Texture Box",
    description: "Free textures for 3D Artists with custom texture services.",
    url: "https://texturebox.com/",
    imageUrl: getIconUrl("https://texturebox.com/"),
  },
  {
    title: "Texture Fun",
    description: "Free PBR texture sets of common architectural materials.",
    url: "https://texturefun.com/",
    imageUrl: getIconUrl("https://texturefun.com/"),
  },
  {
    title: "MaterialX Library",
    description: "Free MaterialX-based Material Library from AMD.",
    url: "https://gpuopen.com/learn/materialx/",
    imageUrl: getIconUrl("https://gpuopen.com/learn/materialx/"),
  },
  {
    title: "LotPixel",
    description:
      "Free scan-based textures of interior and exterior materials up to 8K resolution.",
    url: "https://www.lotpixel.com/",
    imageUrl: getIconUrl("https://www.lotpixel.com/"),
  },
  {
    title: "Poly",
    description:
      "Seamless texture generator & gallery with PBR maps using text or image prompts.",
    url: "https://withpoly.com/",
    imageUrl: getIconUrl("https://withpoly.com/"),
  },
  {
    title: "IES Library",
    description:
      "Download free IES lighting files describing how light from a lamp is distributed in a room.",
    url: "https://ieslibrary.com/en/browse",
    imageUrl: getIconUrl("https://ieslibrary.com/en/browse"),
  },
  {
    title: "WildTextures",
    description:
      "Free high resolution textures and patterns for commercial or personal use.",
    url: "https://www.wildtextures.com/",
    imageUrl: getIconUrl("https://www.wildtextures.com/"),
  },
  {
    title: "Textures.com",
    description:
      "Digital pictures of all sorts of materials. Sign up for free and download 15 free images every day!",
    url: "https://www.textures.com/",
    imageUrl: getIconUrl("https://www.textures.com/"),
  },
  {
    title: "Substance Share",
    description: "The free exchange platform for the Substance community.",
    url: "https://share.substance3d.com/",
    imageUrl: getIconUrl("https://share.substance3d.com/"),
  },
  {
    title: "Material.Style",
    description: "Free PBR materials for architecture and design.",
    url: "https://material.style/",
    imageUrl: getIconUrl("https://material.style/"),
  },
  {
    title: "Texture Haven",
    description: "Archive of high quality PBR textures.",
    url: "https://texturehaven.com/",
    imageUrl: getIconUrl("https://texturehaven.com/"),
  },
  {
    title: "3D Model Haven",
    description: "Free high quality 3D models under CC0 license.",
    url: "https://3dmodelhaven.com/",
    imageUrl: getIconUrl("https://3dmodelhaven.com/"),
  },
  {
    title: "Open3DModel",
    description: "Free 3D models in various formats.",
    url: "https://open3dmodel.com/",
    imageUrl: getIconUrl("https://open3dmodel.com/"),
  },
  {
    title: "Archive3D",
    description: "Free 3D models collection.",
    url: "https://archive3d.net/",
    imageUrl: getIconUrl("https://archive3d.net/"),
  },
  {
    title: "NASA 3D Resources",
    description: "3D models from NASA's missions and research.",
    url: "https://nasa3d.arc.nasa.gov/models",
    imageUrl: getIconUrl("https://nasa3d.arc.nasa.gov/models"),
  },
  {
    title: "Dimensiva",
    description: "High quality 3D models for architecture and design.",
    url: "https://dimensiva.com/free/",
    imageUrl: getIconUrl("https://dimensiva.com/free/"),
  },
  {
    title: "3D Scan Store",
    description: "Free and premium 3D scans.",
    url: "https://www.3dscanstore.com/",
    imageUrl: getIconUrl("https://www.3dscanstore.com/"),
  },
  {
    title: "Free3D",
    description: "Free 3D models, textures and tutorials.",
    url: "https://free3d.com/",
    imageUrl: getIconUrl("https://free3d.com/"),
  },
  {
    title: "GrabCAD",
    description: "Mechanical engineering and CAD models.",
    url: "https://grabcad.com/library",
    imageUrl: getIconUrl("https://grabcad.com/library"),
  },
  {
    title: "Hum3D",
    description: "High quality vehicle 3D models.",
    url: "https://hum3d.com/",
    imageUrl: getIconUrl("https://hum3d.com/"),
  },
  {
    title: "3DExport",
    description: "3D models marketplace with free models section.",
    url: "https://3dexport.com/free-3d-models",
    imageUrl: getIconUrl("https://3dexport.com/free-3d-models"),
  },
  {
    title: "Blender Guru",
    description: "High quality Blender tutorials and resources.",
    url: "https://www.blenderguru.com/",
    imageUrl: getIconUrl("https://www.blenderguru.com/"),
  },
  {
    title: "CG Cookie",
    description: "Professional Blender training and tutorials.",
    url: "https://cgcookie.com/",
    imageUrl: getIconUrl("https://cgcookie.com/"),
  },
  {
    title: "Blender Cloud",
    description:
      "Training and production resources from the Blender Institute.",
    url: "https://cloud.blender.org/",
    imageUrl: getIconUrl("https://cloud.blender.org/"),
  },
  {
    title: "Blender Artists",
    description: "Largest Blender community forum.",
    url: "https://blenderartists.org/",
    imageUrl: getIconUrl("https://blenderartists.org/"),
  },
  {
    title: "Blender Market",
    description: "Marketplace for Blender products and add-ons.",
    url: "https://blendermarket.com/",
    imageUrl: getIconUrl("https://blendermarket.com/"),
  },
  {
    title: "Blender Stack Exchange",
    description: "Q&A for Blender users and developers.",
    url: "https://blender.stackexchange.com/",
    imageUrl: getIconUrl("https://blender.stackexchange.com/"),
  },
  {
    title: "Blender Manual",
    description: "Official Blender documentation and user manual.",
    url: "https://docs.blender.org/manual/en/latest/",
    imageUrl: getIconUrl("https://docs.blender.org/manual/en/latest/"),
  },
  {
    title: "Blender Python API",
    description: "Official Blender Python API documentation.",
    url: "https://docs.blender.org/api/current/",
    imageUrl: getIconUrl("https://docs.blender.org/api/current/"),
  },
  {
    title: "Right-Click Select",
    description: "Community-driven Blender tips and tricks.",
    url: "https://rightclickselect.com/",
    imageUrl: getIconUrl("https://rightclickselect.com/"),
  },
  {
    title: "Poly Pizza",
    description: "Search engine for free 3D models.",
    url: "https://poly.pizza/",
    imageUrl: getIconUrl("https://poly.pizza/"),
  },
  {
    title: "BoxCutter",
    description: "Boolean based modeling toolkit for Blender.",
    url: "https://boxcutter-manual.readthedocs.io/",
    imageUrl: getIconUrl("https://boxcutter-manual.readthedocs.io/"),
  },
  {
    title: "Retopoflow",
    description: "Retopology tools for Blender.",
    url: "https://cgcookie.com/resource/retopoflow",
    imageUrl: getIconUrl("https://cgcookie.com/resource/retopoflow"),
  },
  {
    title: "BY-GEN",
    description: "Procedural geometry generation toolkit.",
    url: "https://gumroad.com/l/BY-GEN",
    imageUrl: getIconUrl("https://gumroad.com/l/BY-GEN"),
  },
  {
    title: "Botaniq",
    description: "Tree and plant creation toolkit for Blender.",
    url: "https://botaniq3d.com/",
    imageUrl: getIconUrl("https://botaniq3d.com/"),
  },
  {
    title: "Graswald",
    description: "Advanced grass and plant creation system.",
    url: "https://www.graswald3d.com/",
    imageUrl: getIconUrl("https://www.graswald3d.com/"),
  },
  {
    title: "Flip Fluids",
    description: "Fluid simulation addon for Blender.",
    url: "https://flipfluids.com/",
    imageUrl: getIconUrl("https://flipfluids.com/"),
  },
  {
    title: "Mantaflow",
    description: "Built-in fluid and smoke simulation framework.",
    url: "https://mantaflow.com/",
    imageUrl: getIconUrl("https://mantaflow.com/"),
  },
  {
    title: "Molecular Script",
    description: "Particle physics simulation addon.",
    url: "https://github.com/scorpion81/Blender-Molecular-Script",
    imageUrl: getIconUrl(
      "https://github.com/scorpion81/Blender-Molecular-Script"
    ),
  },
  {
    title: "Tissue",
    description: "Advanced modeling tools including tessellation.",
    url: "https://github.com/alessandro-zomparelli/tissue",
    imageUrl: getIconUrl("https://github.com/alessandro-zomparelli/tissue"),
  },
  {
    title: "UV Packer",
    description: "Professional UV packing solution.",
    url: "https://www.uv-packer.com/",
    imageUrl: getIconUrl("https://www.uv-packer.com/"),
  },
  {
    title: "UVPackmaster",
    description: "High performance UV packing solution.",
    url: "https://uvpackmaster.com/",
    imageUrl: getIconUrl("https://uvpackmaster.com/"),
  },
  {
    title: "TexTools",
    description: "Professional UV and texturing tools.",
    url: "http://renderhjs.net/textools/blender/",
    imageUrl: getIconUrl("http://renderhjs.net/textools/blender/"),
  },
  {
    title: "Substance 3D Painter",
    description: "Industry standard texturing software.",
    url: "https://www.adobe.com/products/substance3d-painter.html",
    imageUrl: getIconUrl(
      "https://www.adobe.com/products/substance3d-painter.html"
    ),
  },
  {
    title: "ArmorPaint",
    description: "Open-source 3D PBR texture painting software.",
    url: "https://armorpaint.org/",
    imageUrl: getIconUrl("https://armorpaint.org/"),
  },
  {
    title: "Material Maker",
    description: "Procedural texture generation tool, free and open source.",
    url: "https://rodzilla.itch.io/material-maker",
    imageUrl: getIconUrl("https://rodzilla.itch.io/material-maker"),
  },
  {
    title: "BlenRig",
    description: "Advanced auto-rigging and posing system.",
    url: "https://github.com/jpbouza/BlenRig",
    imageUrl: getIconUrl("https://github.com/jpbouza/BlenRig"),
  },
  {
    title: "Rig on the Fly",
    description: "Quick rigging tool for Blender.",
    url: "https://gitlab.com/dypsloom/rigonthefly",
    imageUrl: getIconUrl("https://gitlab.com/dypsloom/rigonthefly"),
  },
  {
    title: "Auto-Rig Pro",
    description: "Professional auto-rigging solution.",
    url: "https://blendermarket.com/products/auto-rig-pro",
    imageUrl: getIconUrl("https://blendermarket.com/products/auto-rig-pro"),
  },
  {
    title: "Rigacar",
    description: "Car rigging addon for Blender.",
    url: "https://github.com/digicreatures/rigacar",
    imageUrl: getIconUrl("https://github.com/digicreatures/rigacar"),
  },
  {
    title: "Wiggle Bones",
    description: "Physics-based secondary animation for bones.",
    url: "https://github.com/ShayBox/WiggleBone",
    imageUrl: getIconUrl("https://github.com/ShayBox/WiggleBone"),
  },
  {
    title: "Spring Bones",
    description: "Spring physics for bones in Blender.",
    url: "https://github.com/artellblender/springbones",
    imageUrl: getIconUrl("https://github.com/artellblender/springbones"),
  },
  {
    title: "Bone Widget",
    description: "Custom bone shapes for rigging.",
    url: "https://github.com/BlenderDefender/boneWidget",
    imageUrl: getIconUrl("https://github.com/BlenderDefender/boneWidget"),
  },
  {
    title: "Rigid Body Bones",
    description: "Convert bones to rigid bodies for physics simulation.",
    url: "https://github.com/BlenderDefender/rigidBodyBones",
    imageUrl: getIconUrl("https://github.com/BlenderDefender/rigidBodyBones"),
  },
  {
    title: "World Machine",
    description: "Professional terrain generation software.",
    url: "https://www.world-machine.com/",
    imageUrl: getIconUrl("https://www.world-machine.com/"),
  },
  {
    title: "Gaea",
    description: "Terrain design software for visual effects.",
    url: "https://quadspinner.com/",
    imageUrl: getIconUrl("https://quadspinner.com/"),
  },
  {
    title: "SpaceshipGenerator",
    description: "Procedural spaceship generation.",
    url: "https://github.com/a1studmuffin/SpaceshipGenerator",
    imageUrl: getIconUrl("https://github.com/a1studmuffin/SpaceshipGenerator"),
  },
  {
    title: "Space Station Generator",
    description: "Generate modular space stations.",
    url: "https://github.com/gsztub/blender-space-station-generator",
    imageUrl: getIconUrl(
      "https://github.com/gsztub/blender-space-station-generator"
    ),
  },
  {
    title: "Sprytile",
    description: "Tile-based modeling tool.",
    url: "https://github.com/ologon/Sprytile",
    imageUrl: getIconUrl("https://github.com/ologon/Sprytile"),
  },
  {
    title: "The Grove 3D",
    description: "Professional tree creation system.",
    url: "https://www.thegrove3d.com/",
    imageUrl: getIconUrl("https://www.thegrove3d.com/"),
  },
  {
    title: "tree-gen",
    description: "Procedural tree generation.",
    url: "https://github.com/friggog/tree-gen",
    imageUrl: getIconUrl("https://github.com/friggog/tree-gen"),
  },
  {
    title: "Geo-Scatter",
    description: "Advanced scattering system for Blender.",
    url: "https://blendermarket.com/products/geo-scatter",
    imageUrl: getIconUrl("https://blendermarket.com/products/geo-scatter"),
  },
  {
    title: "BagaPie Modifier",
    description: "Collection of modifiers for scattering and more.",
    url: "https://blendermarket.com/products/bagapie",
    imageUrl: getIconUrl("https://blendermarket.com/products/bagapie"),
  },
  {
    title: "Gscatter",
    description: "GPU-accelerated scattering tool.",
    url: "https://blendermarket.com/products/gscatter",
    imageUrl: getIconUrl("https://blendermarket.com/products/gscatter"),
  },
  {
    title: "City Scatter",
    description: "City generation and scattering system.",
    url: "https://blendermarket.com/products/city-scatter",
    imageUrl: getIconUrl("https://blendermarket.com/products/city-scatter"),
  },
  {
    title: "AnimAide",
    description: "Animation tools and workflow improvements.",
    url: "https://github.com/aresdevo/animaide",
    imageUrl: getIconUrl("https://github.com/aresdevo/animaide"),
  },
  {
    title: "Commotion",
    description: "Motion graphics tools for Blender.",
    url: "https://github.com/mrdoob/commotion",
    imageUrl: getIconUrl("https://github.com/mrdoob/commotion"),
  },
  {
    title: "Animax",
    description: "Animation tools and utilities.",
    url: "https://blendermarket.com/products/animax",
    imageUrl: getIconUrl("https://blendermarket.com/products/animax"),
  },
  {
    title: "AutoMask",
    description: "Automatic masking tools for animation.",
    url: "https://github.com/lukas-blecher/AutoMask",
    imageUrl: getIconUrl("https://github.com/lukas-blecher/AutoMask"),
  },
  {
    title: "COA Tools",
    description: "2D animation tools for Blender.",
    url: "https://github.com/ndee85/coa_tools",
    imageUrl: getIconUrl("https://github.com/ndee85/coa_tools"),
  },
  {
    title: "BlendyPose",
    description: "Pose library management tool.",
    url: "https://github.com/BlendyPose/BlendyPose",
    imageUrl: getIconUrl("https://github.com/BlendyPose/BlendyPose"),
  },
  {
    title: "reflow",
    description: "Animation retiming tool.",
    url: "https://github.com/CGCookie/reflow",
    imageUrl: getIconUrl("https://github.com/CGCookie/reflow"),
  },
  {
    title: "Keyframe Nudge",
    description: "Animation keyframe adjustment tool.",
    url: "https://github.com/TheDuckCow/keyframe-nudge",
    imageUrl: getIconUrl("https://github.com/TheDuckCow/keyframe-nudge"),
  },
  {
    title: "Shape Keys+",
    description: "Enhanced shape key management.",
    url: "https://github.com/MichaelGold/shape-keys-plus",
    imageUrl: getIconUrl("https://github.com/MichaelGold/shape-keys-plus"),
  },
  {
    title: "Stop-Mo",
    description: "Stop motion animation tools.",
    url: "https://github.com/bblanimation/stop-mo",
    imageUrl: getIconUrl("https://github.com/bblanimation/stop-mo"),
  },
  {
    title: "NLA Midi Copier",
    description: "Convert MIDI to animation data.",
    url: "https://github.com/Cornerback24/Blender-NLA-Midi-Copier",
    imageUrl: getIconUrl(
      "https://github.com/Cornerback24/Blender-NLA-Midi-Copier"
    ),
  },
  {
    title: "WritingAnimation",
    description: "Text writing animation generator.",
    url: "https://github.com/Shriinivas/writinganimation",
    imageUrl: getIconUrl("https://github.com/Shriinivas/writinganimation"),
  },
  {
    title: "Typewriter",
    description: "Typewriter text animation effect.",
    url: "https://github.com/blender/typewriter",
    imageUrl: getIconUrl("https://github.com/blender/typewriter"),
  },
  {
    title: "TextCounter",
    description: "Animated counter text effects.",
    url: "https://github.com/blender/text-counter",
    imageUrl: getIconUrl("https://github.com/blender/text-counter"),
  },
  {
    title: "AMD Radeon ProRender",
    description:
      "Free physically-based rendering engine with GPU acceleration.",
    url: "https://www.amd.com/en/technologies/radeon-prorender",
    imageUrl: getIconUrl(
      "https://www.amd.com/en/technologies/radeon-prorender"
    ),
  },
  {
    title: "AMD Blender USD Hydra",
    description: "USD and Hydra integration for advanced rendering workflows.",
    url: "https://github.com/GPUOpen-LibrariesAndSDKs/BlenderUSDHydraAddon",
    imageUrl: getIconUrl(
      "https://github.com/GPUOpen-LibrariesAndSDKs/BlenderUSDHydraAddon"
    ),
  },
  {
    title: "DreamWork's MoonRay",
    description: "Production rendering engine from DreamWorks Animation.",
    url: "https://openmoonray.org/",
    imageUrl: getIconUrl("https://openmoonray.org/"),
  },
  {
    title: "Malt",
    description:
      "Real-time rendering framework for non-photorealistic rendering.",
    url: "https://github.com/bnpr/Malt",
    imageUrl: getIconUrl("https://github.com/bnpr/Malt"),
  },
  {
    title: "LuxCoreRender",
    description: "Physically based and unbiased rendering engine.",
    url: "https://luxcorerender.org/",
    imageUrl: getIconUrl("https://luxcorerender.org/"),
  },
  {
    title: "Octane Render",
    description: "GPU-accelerated unbiased rendering engine.",
    url: "https://home.otoy.com/render/octane-render/",
    imageUrl: getIconUrl("https://home.otoy.com/render/octane-render/"),
  },
  {
    title: "V-Ray",
    description: "Professional rendering solution for production environments.",
    url: "https://www.chaosgroup.com/vray/blender",
    imageUrl: getIconUrl("https://www.chaosgroup.com/vray/blender"),
  },
  {
    title: "Redshift",
    description: "GPU-accelerated renderer for high-end production rendering.",
    url: "https://www.maxon.net/en/redshift",
    imageUrl: getIconUrl("https://www.maxon.net/en/redshift"),
  },
  {
    title: "RenderMan",
    description: "Pixar's production rendering software for Blender.",
    url: "https://renderman.pixar.com/",
    imageUrl: getIconUrl("https://renderman.pixar.com/"),
  },
  {
    title: "Appleseed",
    description: "Open-source physically-based rendering engine.",
    url: "https://appleseedhq.net/",
    imageUrl: getIconUrl("https://appleseedhq.net/"),
  },
  {
    title: "YafaRay",
    description: "Free open-source raytracing engine.",
    url: "http://www.yafaray.org/",
    imageUrl: getIconUrl("http://www.yafaray.org/"),
  },
  {
    title: "Freestyle NPR",
    description:
      "Non-photorealistic line rendering engine integrated in Blender.",
    url: "https://freestyle.sourceforge.net/",
    imageUrl: getIconUrl("https://freestyle.sourceforge.net/"),
  },
  {
    title: "MeshSync",
    description: "Real-time mesh synchronization between Unity and Blender.",
    url: "https://github.com/unity3d-jp/MeshSync",
    imageUrl: getIconUrl("https://github.com/unity3d-jp/MeshSync"),
  },
  {
    title: "Blender Tools by Epic Games",
    description: "Official Blender tools from Epic Games.",
    url: "https://www.unrealengine.com/en-US/blog/download-our-new-blender-addons",
    imageUrl: getIconUrl(
      "https://www.unrealengine.com/en-US/blog/download-our-new-blender-addons"
    ),
  },
  {
    title: "Mr Mannequins Tools",
    description: "Tools for working with Unreal Engine mannequin.",
    url: "https://github.com/Jim-Kroovy/Mr-Mannequins-Tools",
    imageUrl: getIconUrl("https://github.com/Jim-Kroovy/Mr-Mannequins-Tools"),
  },
  {
    title: "Blender For Unreal Engine",
    description: "Export tools for Unreal Engine.",
    url: "https://github.com/xavier150/Blender-For-UnrealEngine-Addons",
    imageUrl: getIconUrl(
      "https://github.com/xavier150/Blender-For-UnrealEngine-Addons"
    ),
  },
  {
    title: "AssetGen",
    description: "Asset generation tools for game engines.",
    url: "https://github.com/Grim-es/asset-gen-addon-blender",
    imageUrl: getIconUrl("https://github.com/Grim-es/asset-gen-addon-blender"),
  },
  {
    title: "V-HACD",
    description: "Volumetric hierarchical approximate convex decomposition.",
    url: "https://github.com/kmammou/v-hacd",
    imageUrl: getIconUrl("https://github.com/kmammou/v-hacd"),
  },
  {
    title: "Godot Game Tools",
    description: "Tools for Godot game engine integration.",
    url: "https://github.com/godotengine/godot-blender-exporter",
    imageUrl: getIconUrl(
      "https://github.com/godotengine/godot-blender-exporter"
    ),
  },
  {
    title: "Blender2Godot",
    description: "Export tools for Godot engine.",
    url: "https://github.com/V-Sekai/blender2godot",
    imageUrl: getIconUrl("https://github.com/V-Sekai/blender2godot"),
  },
  {
    title: "Embark Blender Tools",
    description: "Game development tools from Embark Studios.",
    url: "https://github.com/EmbarkStudios/blender-tools",
    imageUrl: getIconUrl("https://github.com/EmbarkStudios/blender-tools"),
  },
  {
    title: "Armory3D",
    description: "Game engine built for Blender.",
    url: "https://armory3d.org/",
    imageUrl: getIconUrl("https://armory3d.org/"),
  },
  {
    title: "UPBGE",
    description: "Integrated game engine for Blender.",
    url: "https://upbge.org/",
    imageUrl: getIconUrl("https://upbge.org/"),
  },
  {
    title: "Arsenal",
    description: "Asset pipeline tools for game development.",
    url: "https://github.com/blender/arsenal",
    imageUrl: getIconUrl("https://github.com/blender/arsenal"),
  },
  {
    title: "INOX",
    description: "Game development framework for Blender.",
    url: "https://github.com/inox-tools/inox",
    imageUrl: getIconUrl("https://github.com/inox-tools/inox"),
  },
  {
    title: "Asset Creation Toolset",
    description: "Tools for creating game-ready assets.",
    url: "https://blendermarket.com/products/asset-creation-toolset",
    imageUrl: getIconUrl(
      "https://blendermarket.com/products/asset-creation-toolset"
    ),
  },
  {
    title: "Mixamo Converter",
    description: "Convert Mixamo animations for game engines.",
    url: "https://github.com/enziop/mixamo_converter",
    imageUrl: getIconUrl("https://github.com/enziop/mixamo_converter"),
  },
  {
    title: "Game Asset Generator",
    description: "Generate game-ready assets from high-poly models.",
    url: "https://github.com/blender/game-asset-generator",
    imageUrl: getIconUrl("https://github.com/blender/game-asset-generator"),
  },
  {
    title: "Game Rig Tools",
    description: "Rigging tools for game development.",
    url: "https://github.com/blender/game-rig-tools",
    imageUrl: getIconUrl("https://github.com/blender/game-rig-tools"),
  },
  {
    title: "Polycount",
    description: "Community for game artists and developers.",
    url: "https://polycount.com/",
    imageUrl: getIconUrl("https://polycount.com/"),
  },
  {
    title: "Soundly",
    description: "Professional sound effects library and workflow tool.",
    url: "https://getsoundly.com/",
    imageUrl: getIconUrl("https://getsoundly.com/"),
  },
  {
    title: "Epidemic Sound",
    description: "Royalty-free music and sound effects.",
    url: "https://www.epidemicsound.com/",
    imageUrl: getIconUrl("https://www.epidemicsound.com/"),
  },
  {
    title: "AudioJungle",
    description: "Marketplace for royalty-free music and audio.",
    url: "https://audiojungle.net/",
    imageUrl: getIconUrl("https://audiojungle.net/"),
  },
  {
    title: "PremiumBeat",
    description: "Curated royalty-free music library.",
    url: "https://www.premiumbeat.com/",
    imageUrl: getIconUrl("https://www.premiumbeat.com/"),
  },
  {
    title: "Artlist",
    description: "Music, SFX, and stock footage for creators.",
    url: "https://artlist.io/",
    imageUrl: getIconUrl("https://artlist.io/"),
  },
  {
    title: "Soundsnap",
    description: "Professional sound effects library.",
    url: "https://www.soundsnap.com/",
    imageUrl: getIconUrl("https://www.soundsnap.com/"),
  },
  {
    title: "AudioBlocks",
    description: "Unlimited downloads of royalty-free audio.",
    url: "https://www.storyblocks.com/audio",
    imageUrl: getIconUrl("https://www.storyblocks.com/audio"),
  },
  {
    title: "Sound Drivers",
    description: "Drive animation with audio in Blender.",
    url: "https://github.com/sounddrivers/sound-drivers",
    imageUrl: getIconUrl("https://github.com/sounddrivers/sound-drivers"),
  },
  {
    title: "Audio Tools",
    description: "Collection of audio tools for Blender.",
    url: "https://github.com/blender/audio-tools",
    imageUrl: getIconUrl("https://github.com/blender/audio-tools"),
  },
  {
    title: "VSE Transform Tools",
    description: "Transform tools for the Video Sequence Editor.",
    url: "https://github.com/doakey3/VSE_Transform_Tools",
    imageUrl: getIconUrl("https://github.com/doakey3/VSE_Transform_Tools"),
  },
  {
    title: "Power Sequencer",
    description: "Video editing tools for Blender's VSE.",
    url: "https://github.com/GDquest/Blender-power-sequencer",
    imageUrl: getIconUrl("https://github.com/GDquest/Blender-power-sequencer"),
  },
  {
    title: "VSEQF",
    description: "Quick functions for Blender's VSE.",
    url: "https://github.com/snuq/VSEQF",
    imageUrl: getIconUrl("https://github.com/snuq/VSEQF"),
  },
  {
    title: "Blender Audacity",
    description: "Integration between Blender and Audacity.",
    url: "https://github.com/blender/audacity-integration",
    imageUrl: getIconUrl("https://github.com/blender/audacity-integration"),
  },
  {
    title: "Sorcar",
    description: "Node-based visual programming system.",
    url: "https://github.com/aachman98/Sorcar",
    imageUrl: getIconUrl("https://github.com/aachman98/Sorcar"),
  },
  {
    title: "Particle Flow",
    description: "Advanced particle system for Blender.",
    url: "https://github.com/blender/particle-flow",
    imageUrl: getIconUrl("https://github.com/blender/particle-flow"),
  },
  {
    title: "Molecular Nodes",
    description: "Scientific visualization nodes for Blender.",
    url: "https://github.com/blender/molecular-nodes",
    imageUrl: getIconUrl("https://github.com/blender/molecular-nodes"),
  },
  {
    title: "Scientific Visualization",
    description: "Tools for scientific data visualization.",
    url: "https://github.com/blender/scientific-visualization",
    imageUrl: getIconUrl("https://github.com/blender/scientific-visualization"),
  },
  {
    title: "Medical Visualization",
    description: "Medical data visualization tools.",
    url: "https://github.com/blender/medical-visualization",
    imageUrl: getIconUrl("https://github.com/blender/medical-visualization"),
  },
  {
    title: "Geographic Information",
    description: "GIS data visualization in Blender.",
    url: "https://github.com/blender/geographic-information",
    imageUrl: getIconUrl("https://github.com/blender/geographic-information"),
  },
  {
    title: "CAD Tools",
    description: "Computer-aided design tools for Blender.",
    url: "https://github.com/blender/cad-tools",
    imageUrl: getIconUrl("https://github.com/blender/cad-tools"),
  },
  {
    title: "Engineering Tools",
    description: "Engineering-focused tools and add-ons.",
    url: "https://github.com/blender/engineering-tools",
    imageUrl: getIconUrl("https://github.com/blender/engineering-tools"),
  },
  {
    title: "Technical Drawing",
    description: "Technical drawing and documentation tools.",
    url: "https://github.com/blender/technical-drawing",
    imageUrl: getIconUrl("https://github.com/blender/technical-drawing"),
  },
  {
    title: "Measurement Tools",
    description: "Precise measurement tools for Blender.",
    url: "https://github.com/blender/measurement-tools",
    imageUrl: getIconUrl("https://github.com/blender/measurement-tools"),
  },
  {
    title: "Blender Foundation",
    description: "Official Blender organization and development.",
    url: "https://www.blender.org/",
    imageUrl: getIconUrl("https://www.blender.org/"),
  },
  {
    title: "Blender Institute",
    description: "Production studio and training facility.",
    url: "https://www.blender.org/institute/",
    imageUrl: getIconUrl("https://www.blender.org/institute/"),
  },
  {
    title: "Blender Studio",
    description: "Open production studio and training platform.",
    url: "https://studio.blender.org/",
    imageUrl: getIconUrl("https://studio.blender.org/"),
  },
  {
    title: "Blender Development",
    description: "Official Blender development resources.",
    url: "https://developer.blender.org/",
    imageUrl: getIconUrl("https://developer.blender.org/"),
  },
  {
    title: "Blender VFX",
    description: "Visual effects resources and training.",
    url: "https://www.blender.org/vfx/",
    imageUrl: getIconUrl("https://www.blender.org/vfx/"),
  },
  {
    title: "VFX Platform",
    description: "Industry standard platform for VFX software.",
    url: "https://vfxplatform.com/",
    imageUrl: getIconUrl("https://vfxplatform.com/"),
  },
  {
    title: "Blender Documentation",
    description: "Official Blender documentation.",
    url: "https://docs.blender.org/",
    imageUrl: getIconUrl("https://docs.blender.org/"),
  },
  {
    title: "Developer Portal",
    description: "Resources for Blender developers.",
    url: "https://developer.blender.org/",
    imageUrl: getIconUrl("https://developer.blender.org/"),
  },
  {
    title: "DevTalk",
    description: "Blender development discussions.",
    url: "https://devtalk.blender.org/",
    imageUrl: getIconUrl("https://devtalk.blender.org/"),
  },
  {
    title: "Developers Blog",
    description: "Official Blender development blog.",
    url: "https://code.blender.org/",
    imageUrl: getIconUrl("https://code.blender.org/"),
  },
  {
    title: "Computer Graphics from Scratch",
    description: "Free computer graphics learning resource.",
    url: "https://gabrielgambetta.com/computer-graphics-from-scratch/",
    imageUrl: getIconUrl(
      "https://gabrielgambetta.com/computer-graphics-from-scratch/"
    ),
  },
  {
    title: "Blender Nation",
    description: "Community news and resources.",
    url: "https://www.blendernation.com/",
    imageUrl: getIconUrl("https://www.blendernation.com/"),
  },
  {
    title: "Blender Network",
    description: "Professional Blender network.",
    url: "https://www.blendernetwork.org/",
    imageUrl: getIconUrl("https://www.blendernetwork.org/"),
  },
  {
    title: "Blender Today",
    description: "Daily Blender news and updates.",
    url: "https://blender.today/",
    imageUrl: getIconUrl("https://blender.today/"),
  },
  {
    title: "Blender Reddit",
    description: "Blender community on Reddit.",
    url: "https://www.reddit.com/r/blender/",
    imageUrl: getIconUrl("https://www.reddit.com/r/blender/"),
  },
  {
    title: "Blender Discord",
    description: "Official Blender Discord community.",
    url: "https://discord.gg/blender",
    imageUrl: getIconUrl("https://discord.gg/blender"),
  },
  {
    title: "Blender Chat",
    description: "Official Blender chat platform.",
    url: "https://blender.chat/",
    imageUrl: getIconUrl("https://blender.chat/"),
  },
  {
    title: "Blender Development Fund",
    description: "Support Blender development.",
    url: "https://fund.blender.org/",
    imageUrl: getIconUrl("https://fund.blender.org/"),
  },
  {
    title: "The Blend",
    description: "Community-driven Blender resources.",
    url: "https://theblend.media/",
    imageUrl: getIconUrl("https://theblend.media/"),
  },
  {
    title: "Blender Sushi",
    description: "Blender tips and tutorials.",
    url: "https://blendersushi.blogspot.com/",
    imageUrl: getIconUrl("https://blendersushi.blogspot.com/"),
  },
  {
    title: "Artisticrender",
    description: "Artistic rendering tutorials and resources.",
    url: "https://artisticrender.com/",
    imageUrl: getIconUrl("https://artisticrender.com/"),
  },
  {
    title: "Creative Shrimp",
    description: "Blender tutorials and resources.",
    url: "https://www.creativeshrimp.com/",
    imageUrl: getIconUrl("https://www.creativeshrimp.com/"),
  },
  {
    title: "Blender 3D Architect",
    description: "Architectural visualization resources.",
    url: "https://www.blender3darchitect.com/",
    imageUrl: getIconUrl("https://www.blender3darchitect.com/"),
  },
  {
    title: "BlenderAddons.org",
    description: "Curated list of Blender addons.",
    url: "https://blenderaddons.org/",
    imageUrl: getIconUrl("https://blenderaddons.org/"),
  },
  {
    title: "Interplanety",
    description: "Blender development resources.",
    url: "https://interplanety.org/",
    imageUrl: getIconUrl("https://interplanety.org/"),
  },
  {
    title: "Darkfall",
    description: "Blender tutorials and resources.",
    url: "https://darkfall.me/",
    imageUrl: getIconUrl("https://darkfall.me/"),
  },
  {
    title: "The CG Essentials",
    description: "CG tutorials and resources.",
    url: "https://thecgessentials.com/",
    imageUrl: getIconUrl("https://thecgessentials.com/"),
  },
  {
    title: "Blender Secrets",
    description: "Daily Blender tips and tricks.",
    url: "https://www.blendersecrets.org/",
    imageUrl: getIconUrl("https://www.blendersecrets.org/"),
  },
  {
    title: "appleseed",
    description: "Open source physically-based renderer.",
    url: "https://appleseedhq.net/",
    imageUrl: getIconUrl("https://appleseedhq.net/"),
  },
  {
    title: "K-Cycles",
    description: "Optimized version of Cycles render engine.",
    url: "https://www.blendermarket.com/products/k-cycles",
    imageUrl: getIconUrl("https://www.blendermarket.com/products/k-cycles"),
  },
  {
    title: "Fracture Tools",
    description: "Advanced fracturing and destruction tools.",
    url: "https://github.com/blender/fracture-tools",
    imageUrl: getIconUrl("https://github.com/blender/fracture-tools"),
  },
  {
    title: "Phobos",
    description: "Robot simulation and modeling toolkit.",
    url: "https://github.com/dfki-ric/phobos",
    imageUrl: getIconUrl("https://github.com/dfki-ric/phobos"),
  },
  {
    title: "WoT Tank Viewer",
    description: "World of Tanks model viewer and exporter.",
    url: "https://github.com/blender/wot-tank-viewer",
    imageUrl: getIconUrl("https://github.com/blender/wot-tank-viewer"),
  },
  {
    title: "Better Collada Exporter",
    description: "Improved Collada format exporter.",
    url: "https://github.com/KhronosGroup/collada-exporter",
    imageUrl: getIconUrl("https://github.com/KhronosGroup/collada-exporter"),
  },
  {
    title: "MeshLab",
    description: "Open source mesh processing system.",
    url: "https://www.meshlab.net/",
    imageUrl: getIconUrl("https://www.meshlab.net/"),
  },
  {
    title: "CloudCompare",
    description: "3D point cloud and mesh processing software.",
    url: "https://www.cloudcompare.org/",
    imageUrl: getIconUrl("https://www.cloudcompare.org/"),
  },
  {
    title: "Blender Conference",
    description: "Annual Blender Conference.",
    url: "https://conference.blender.org/",
    imageUrl: getIconUrl("https://conference.blender.org/"),
  },
  {
    title: "Nodevember",
    description: "Node-based art challenge.",
    url: "https://nodevember.io/",
    imageUrl: getIconUrl("https://nodevember.io/"),
  },
  {
    title: "SculptJanuary",
    description: "Monthly sculpting challenge.",
    url: "https://sculptjanuary.com/",
    imageUrl: getIconUrl("https://sculptjanuary.com/"),
  },
  {
    title: "36 Days of Type",
    description: "Typography design challenge.",
    url: "https://www.36daysoftype.com/",
    imageUrl: getIconUrl("https://www.36daysoftype.com/"),
  },
  {
    title: "Render Challenge",
    description: "Monthly rendering challenge.",
    url: "https://render-challenge.com/",
    imageUrl: getIconUrl("https://render-challenge.com/"),
  },
  {
    title: "Tyre Generator",
    description: "Procedural tire and wheel generator.",
    url: "https://github.com/blender/tyre-generator",
    imageUrl: getIconUrl("https://github.com/blender/tyre-generator"),
  },
  {
    title: "Welder",
    description: "Generate weld seams and beads.",
    url: "https://github.com/blender/welder",
    imageUrl: getIconUrl("https://github.com/blender/welder"),
  },
  {
    title: "Stylized Fantasy Tree Generator",
    description: "Create stylized fantasy trees.",
    url: "https://blendermarket.com/products/stylized-fantasy-tree-generator",
    imageUrl: getIconUrl(
      "https://blendermarket.com/products/stylized-fantasy-tree-generator"
    ),
  },
  {
    title: "Universal Human Rigged Base Mesh",
    description: "Base human mesh with rigging.",
    url: "https://blendermarket.com/products/universal-human-rigged-base-mesh",
    imageUrl: getIconUrl(
      "https://blendermarket.com/products/universal-human-rigged-base-mesh"
    ),
  },
  {
    title: "Poliigon Uber Mapping Node",
    description: "Advanced material mapping node.",
    url: "https://www.poliigon.com/tools/uber-mapping-node",
    imageUrl: getIconUrl("https://www.poliigon.com/tools/uber-mapping-node"),
  },
  {
    title: "Parallax Mapping",
    description: "Parallax occlusion mapping shader.",
    url: "https://github.com/blender/parallax-mapping",
    imageUrl: getIconUrl("https://github.com/blender/parallax-mapping"),
  },
  {
    title: "Grungit",
    description: "Procedural grunge texture generator.",
    url: "https://github.com/blender/grungit",
    imageUrl: getIconUrl("https://github.com/blender/grungit"),
  },
  {
    title: "Layer Painter",
    description: "Layer-based texture painting.",
    url: "https://github.com/blender/layer-painter",
    imageUrl: getIconUrl("https://github.com/blender/layer-painter"),
  },
  {
    title: "Sanctus Library",
    description: "Material library and tools.",
    url: "https://blendermarket.com/products/sanctus-library",
    imageUrl: getIconUrl("https://blendermarket.com/products/sanctus-library"),
  },
  {
    title: "HEAVYPAINT",
    description: "Fast and simple texture painting.",
    url: "https://heavypoly.com/heavypaint",
    imageUrl: getIconUrl("https://heavypoly.com/heavypaint"),
  },
  {
    title: "Krita",
    description: "Free and open source digital painting.",
    url: "https://krita.org/",
    imageUrl: getIconUrl("https://krita.org/"),
  },
  {
    title: "GIMP",
    description: "Free and open source image editor.",
    url: "https://www.gimp.org/",
    imageUrl: getIconUrl("https://www.gimp.org/"),
  },
  {
    title: "EasyBake",
    description: "Simplified texture baking workflow.",
    url: "https://github.com/blender/easy-bake",
    imageUrl: getIconUrl("https://github.com/blender/easy-bake"),
  },
  {
    title: "Principled-Baker",
    description: "Bake PBR textures from Principled BSDF.",
    url: "https://github.com/blender/principled-baker",
    imageUrl: getIconUrl("https://github.com/blender/principled-baker"),
  },
  {
    title: "Blender Addon PBR",
    description: "PBR material creation tools.",
    url: "https://github.com/blender/blender-addon-pbr",
    imageUrl: getIconUrl("https://github.com/blender/blender-addon-pbr"),
  },
  {
    title: "PBR Texture Mapper",
    description: "Map PBR textures to materials.",
    url: "https://github.com/blender/pbr-texture-mapper",
    imageUrl: getIconUrl("https://github.com/blender/pbr-texture-mapper"),
  },
  {
    title: "SCATTr",
    description: "Advanced texture scattering tool.",
    url: "https://github.com/blender/scattr",
    imageUrl: getIconUrl("https://github.com/blender/scattr"),
  },
  {
    title: "Vertex Oven",
    description: "Bake vertex colors and attributes.",
    url: "https://github.com/blender/vertex-oven",
    imageUrl: getIconUrl("https://github.com/blender/vertex-oven"),
  },
  {
    title: "Bake Wrangler",
    description: "Advanced texture baking system.",
    url: "https://github.com/blender/bake-wrangler",
    imageUrl: getIconUrl("https://github.com/blender/bake-wrangler"),
  },
  {
    title: "3D-Coat Applink",
    description: "Integration with 3D-Coat.",
    url: "https://github.com/blender/3d-coat-applink",
    imageUrl: getIconUrl("https://github.com/blender/3d-coat-applink"),
  },
  {
    title: "Lily Surface Scrapper",
    description: "Download PBR materials from various sources.",
    url: "https://github.com/eliemichel/LilySurfaceScrapper",
    imageUrl: getIconUrl("https://github.com/eliemichel/LilySurfaceScrapper"),
  },
  {
    title: "glslTexture",
    description: "GLSL-based texture generation.",
    url: "https://github.com/blender/glsl-texture",
    imageUrl: getIconUrl("https://github.com/blender/glsl-texture"),
  },
  {
    title: "Bake to Vertex Color",
    description: "Convert textures to vertex colors.",
    url: "https://github.com/blender/bake-to-vertex-color",
    imageUrl: getIconUrl("https://github.com/blender/bake-to-vertex-color"),
  },
  {
    title: "EZ Baker",
    description: "Simple texture baking workflow.",
    url: "https://github.com/blender/ez-baker",
    imageUrl: getIconUrl("https://github.com/blender/ez-baker"),
  },
  {
    title: "Bystedts Blender Baker",
    description: "Advanced texture baking tools.",
    url: "https://github.com/blender/bystedts-baker",
    imageUrl: getIconUrl("https://github.com/blender/bystedts-baker"),
  },
  {
    title: "Flow Map Painter",
    description: "Paint flow maps for shaders.",
    url: "https://github.com/blender/flow-map-painter",
    imageUrl: getIconUrl("https://github.com/blender/flow-map-painter"),
  },
  {
    title: "GameSounds.xyz",
    description: "Free game sound effects and music.",
    url: "https://gamesounds.xyz/",
    imageUrl: getIconUrl("https://gamesounds.xyz/"),
  },
  {
    title: "Geometry Nodes",
    description: "Node-based geometry processing.",
    url: "https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/",
    imageUrl: getIconUrl(
      "https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/"
    ),
  },
  {
    title: "Sverchok",
    description: "Parametric tool for architects.",
    url: "https://github.com/nortikin/sverchok",
    imageUrl: getIconUrl("https://github.com/nortikin/sverchok"),
  },
  {
    title: "FLIP Fluids",
    description:
      "Powerful liquid simulation plugin for creating high quality fluid effects in Blender.",
    url: "https://github.com/rlguy/Blender-FLIP-Fluids",
    imageUrl: getIconUrl("https://github.com/rlguy/Blender-FLIP-Fluids"),
  },
  {
    title: "Molecular Script",
    description:
      "Particle collision addon for creating simulations, effects and particles linking.",
    url: "https://github.com/scorpion81/Blender-Molecular-Script",
    imageUrl: getIconUrl(
      "https://github.com/scorpion81/Blender-Molecular-Script"
    ),
  },
  {
    title: "Jet-Fluids",
    description: "Jet fluid simulator integration in Blender.",
    url: "https://github.com/PavelBlend/blender_jet_fluids_addon",
    imageUrl: getIconUrl(
      "https://github.com/PavelBlend/blender_jet_fluids_addon"
    ),
  },
  {
    title: "projectile",
    description:
      "Artist-friendly tool for throwing stuff around inside Blender.",
    url: "https://github.com/natecraddock/projectile",
    imageUrl: getIconUrl("https://github.com/natecraddock/projectile"),
  },
  {
    title: "Phobos",
    description: "Add-on for creating URDF, SDF and SMURF robot models.",
    url: "https://github.com/dfki-ric/phobos",
    imageUrl: getIconUrl("https://github.com/dfki-ric/phobos"),
  },
  {
    title: "CharMorph",
    description:
      "Open source character creation tool, rewrite of MB-Lab for modern Blender.",
    url: "https://github.com/Upliner/CharMorph",
    imageUrl: getIconUrl("https://github.com/Upliner/CharMorph"),
  },
  {
    title: "MPFB",
    description:
      "Open source human generator for Blender, complete rewrite of MakeHuman.",
    url: "https://github.com/makehumancommunity/mpfb2",
    imageUrl: getIconUrl("https://github.com/makehumancommunity/mpfb2"),
  },
  {
    title: "Infinigen",
    description:
      "Procedural generator for photorealistic 3D scenes and infinite worlds.",
    url: "https://github.com/princeton-vl/infinigen",
    imageUrl: getIconUrl("https://github.com/princeton-vl/infinigen"),
  },
  {
    title: "Wolf Generators",
    description:
      "Pack of 16 geometry nodes generators for bridges, cables, chains, particles, and more.",
    url: "https://blendermarket.com/products/wolf-generators",
    imageUrl: getIconUrl("https://blendermarket.com/products/wolf-generators"),
  },
  {
    title: "Buildify",
    description: "Geometry nodes library for easy building creation.",
    url: "https://blendermarket.com/products/buildify",
    imageUrl: getIconUrl("https://blendermarket.com/products/buildify"),
  },
  {
    title: "Carnegie-Mellon Motion Capture",
    description: "2500 free human motion captures in BVH format.",
    url: "http://mocap.cs.cmu.edu/",
    imageUrl: getIconUrl("http://mocap.cs.cmu.edu/"),
  },
  {
    title: "Rokoko Studio",
    description: "150 free mocap moves from Rokoko's Motion Library.",
    url: "https://www.rokoko.com/",
    imageUrl: getIconUrl("https://www.rokoko.com/"),
  },
  {
    title: "Motek Entertainment",
    description:
      "Variety of captured and animated characters for various projects.",
    url: "https://www.motekentertainment.com/",
    imageUrl: getIconUrl("https://www.motekentertainment.com/"),
  },
  {
    title: "Bandai Namco Motiondataset",
    description:
      "Massive library of free motion-capture data for research and personal use.",
    url: "https://github.com/BandaiNamcoResearchInc/Bandai-Namco-Research-Motiondataset",
    imageUrl: getIconUrl(
      "https://github.com/BandaiNamcoResearchInc/Bandai-Namco-Research-Motiondataset"
    ),
  },
  {
    title: "Blendermada",
    description: "Free Blender Material Database with addon support.",
    url: "http://blendermada.com/",
    imageUrl: getIconUrl("http://blendermada.com/"),
  },
  {
    title: "BlenderKit",
    description:
      "Built-in addon for downloading assets, materials, and brushes with one click.",
    url: "https://www.blenderkit.com/",
    imageUrl: getIconUrl("https://www.blenderkit.com/"),
  },
  {
    title: "BNPR Shaders",
    description:
      "Collection of non-photorealistic rendering shaders for Blender.",
    url: "https://github.com/blender/bnpr",
    imageUrl: getIconUrl("https://github.com/blender/bnpr"),
  },
  {
    title: "EEVEE Comics Shader",
    description: "Comic style shader for Blender's EEVEE renderer.",
    url: "https://blendermarket.com/products/eevee-comics-shader",
    imageUrl: getIconUrl(
      "https://blendermarket.com/products/eevee-comics-shader"
    ),
  },
  {
    title: "EEVEEToon",
    description: "Toon shader system for Blender's EEVEE renderer.",
    url: "https://github.com/blender/eeveetoon",
    imageUrl: getIconUrl("https://github.com/blender/eeveetoon"),
  },
  {
    title: "Ultimate Clay Shader",
    description: "Professional clay rendering shader for Blender.",
    url: "https://blendermarket.com/products/ultimate-clay-shader",
    imageUrl: getIconUrl(
      "https://blendermarket.com/products/ultimate-clay-shader"
    ),
  },
  {
    title: "Meta's Massivest Materials",
    description: "Large collection of free materials for Blender.",
    url: "https://www.meta-androcto.com/materials/",
    imageUrl: getIconUrl("https://www.meta-androcto.com/materials/"),
  },
  {
    title: "Blend Swap",
    description: "The one place for Open Source Blender files.",
    url: "https://www.blendswap.com/",
    imageUrl: getIconUrl("https://www.blendswap.com/"),
  },
  {
    title: "Blender Demo Files",
    description: "Official demo scenes from Blender.",
    url: "https://www.blender.org/download/demo-files/",
    imageUrl: getIconUrl("https://www.blender.org/download/demo-files/"),
  },
  {
    title: "BlenderNation Models",
    description:
      "Collection of best free Blender 3D model downloads from the community.",
    url: "https://www.blendernation.com/category/art/free-blender-models/",
    imageUrl: getIconUrl(
      "https://www.blendernation.com/category/art/free-blender-models/"
    ),
  },
  {
    title: "Mantissa Resources",
    description: "Free Blender files and resources.",
    url: "https://mantissa.xyz/pages/free.html",
    imageUrl: getIconUrl("https://mantissa.xyz/pages/free.html"),
  },
  {
    title: "Rain v2",
    description: "Free rigged character model for Blender.",
    url: "https://cloud.blender.org/p/rain/",
    imageUrl: getIconUrl("https://cloud.blender.org/p/rain/"),
  },
  {
    title: "Snow v2",
    description: "Free rigged character model for Blender.",
    url: "https://cloud.blender.org/p/snow/",
    imageUrl: getIconUrl("https://cloud.blender.org/p/snow/"),
  },
  {
    title: "Geometry Nodes Examples",
    description: "Collection of example Geometry Nodes setups.",
    url: "https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/examples.html",
    imageUrl: getIconUrl(
      "https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/examples.html"
    ),
  },
  {
    title: "Poly Haven HDRIs",
    description: "Free high quality HDR environment maps under CC0 license.",
    url: "https://polyhaven.com/hdris",
    imageUrl: getIconUrl("https://polyhaven.com/hdris"),
  },
  {
    title: "Pixar HDRI",
    description: "Free HDR environment maps from Pixar.",
    url: "https://renderman.pixar.com/category/111-hdri",
    imageUrl: getIconUrl("https://renderman.pixar.com/category/111-hdri"),
  },
  {
    title: "HDRLabs",
    description: "Free high quality HDR environment maps and tools.",
    url: "http://www.hdrlabs.com/sibl/archive.html",
    imageUrl: getIconUrl("http://www.hdrlabs.com/sibl/archive.html"),
  },
  {
    title: "HDRI Hub",
    description: "Free HDR environment maps for 3D artists.",
    url: "https://www.hdri-hub.com/hdri-skies-free",
    imageUrl: getIconUrl("https://www.hdri-hub.com/hdri-skies-free"),
  },
  {
    title: "HDRI Skies",
    description: "Free HDR environment maps for lighting 3D scenes.",
    url: "https://hdri-skies.com/",
    imageUrl: getIconUrl("https://hdri-skies.com/"),
  },
  {
    title: "NoEmotionHDRs",
    description: "Free HDR environment maps for CG artists.",
    url: "https://noemotionhdrs.net/",
    imageUrl: getIconUrl("https://noemotionhdrs.net/"),
  },
  {
    title: "Dezoomify",
    description: "Download zoomable images from various museum collections.",
    url: "https://dezoomify.ophir.dev/",
    imageUrl: getIconUrl("https://dezoomify.ophir.dev/"),
  },
  {
    title: "Birmingham Museums Trust",
    description: "Thousands of out-of-copyright images under CC0 license.",
    url: "https://unsplash.com/@birminghammuseumstrust",
    imageUrl: getIconUrl("https://unsplash.com/@birminghammuseumstrust"),
  },
  {
    title: "Wikimedia Commons Art",
    description: "Collection of freely usable media files and artworks.",
    url: "https://commons.wikimedia.org/wiki/Category:Art",
    imageUrl: getIconUrl("https://commons.wikimedia.org/wiki/Category:Art"),
  },
  {
    title: "Art Institute of Chicago",
    description: "Public domain artworks available for free download.",
    url: "https://www.artic.edu/collection",
    imageUrl: getIconUrl("https://www.artic.edu/collection"),
  },
  {
    title: "Paris Musées Collections",
    description: "Over 100,000 public domain artworks for free download.",
    url: "https://www.parismuseescollections.paris.fr/",
    imageUrl: getIconUrl("https://www.parismuseescollections.paris.fr/"),
  },
  {
    title: "The Met Collection",
    description: "Over 406,000 public domain artworks for free use.",
    url: "https://www.metmuseum.org/art/collection",
    imageUrl: getIconUrl("https://www.metmuseum.org/art/collection"),
  },
  {
    title: "Smithsonian Open Access",
    description:
      "Millions of downloadable images from Smithsonian collections.",
    url: "https://www.si.edu/openaccess",
    imageUrl: getIconUrl("https://www.si.edu/openaccess"),
  },
  {
    title: "Natural History Museum Data Portal",
    description: "Research data, images, and 3D scans from museum collections.",
    url: "https://data.nhm.ac.uk/",
    imageUrl: getIconUrl("https://data.nhm.ac.uk/"),
  },
  {
    title: "Anatomy 360",
    description: "3D scanned human reference images for artists.",
    url: "https://anatomy360.info/anatomy-scan-reference-dump/",
    imageUrl: getIconUrl(
      "https://anatomy360.info/anatomy-scan-reference-dump/"
    ),
  },
  {
    title: "Wildlife Reference Photos",
    description: "Reference photos of wildlife for artists.",
    url: "https://wildlifereferencephotos.com/",
    imageUrl: getIconUrl("https://wildlifereferencephotos.com/"),
  },
  {
    title: "Solar Textures",
    description:
      "Real planetary maps in equirectangular projection based on NASA data.",
    url: "https://www.solarsystemscope.com/textures/",
    imageUrl: getIconUrl("https://www.solarsystemscope.com/textures/"),
  },
  {
    title: "NASA 3D Resources",
    description:
      "Collection of 3D models, textures, and images from NASA missions.",
    url: "https://nasa3d.arc.nasa.gov/",
    imageUrl: getIconUrl("https://nasa3d.arc.nasa.gov/"),
  },
  {
    title: "Celestia Motherlode",
    description:
      "Repository for space-related textures, models and celestial objects.",
    url: "https://www.celestiamotherlode.net/",
    imageUrl: getIconUrl("https://www.celestiamotherlode.net/"),
  },
  {
    title: "Earth View",
    description: "Collection of beautiful Earth landscapes from Google Earth.",
    url: "https://earthview.withgoogle.com/",
    imageUrl: getIconUrl("https://earthview.withgoogle.com/"),
  },
  {
    title: "Areo Browser",
    description: "Browser for martian terrain data and rover imagery.",
    url: "https://areobrowser.com/",
    imageUrl: getIconUrl("https://areobrowser.com/"),
  },
  {
    title: "MeshLab",
    description:
      "Open source system for processing and editing 3D triangular meshes.",
    url: "https://www.meshlab.net/",
    imageUrl: getIconUrl("https://www.meshlab.net/"),
  },
  {
    title: "AutoRemesher",
    description:
      "Open-source auto-retopology tool for clean, animation-friendly geometry.",
    url: "https://github.com/huxingyi/autoremesher",
    imageUrl: getIconUrl("https://github.com/huxingyi/autoremesher"),
  },
  {
    title: "Instant Meshes",
    description: "Interactive field-aligned mesh generator.",
    url: "https://github.com/wjakob/instant-meshes",
    imageUrl: getIconUrl("https://github.com/wjakob/instant-meshes"),
  },
  {
    title: "Magica Voxel",
    description:
      "Free lightweight voxel art editor with GPU-based path tracing.",
    url: "https://ephtracy.github.io/",
    imageUrl: getIconUrl("https://ephtracy.github.io/"),
  },
  {
    title: "ZBrushCoreMini",
    description:
      "Free sculpting software with streamlined interface for beginners.",
    url: "https://pixologic.com/zbrushcoremini/",
    imageUrl: getIconUrl("https://pixologic.com/zbrushcoremini/"),
  },
  {
    title: "Make Human",
    description:
      "Open-source tool for creating 3D characters with Blender addon.",
    url: "http://www.makehumancommunity.org/",
    imageUrl: getIconUrl("http://www.makehumancommunity.org/"),
  },
  {
    title: "Dust3D",
    description:
      "Cross-platform open-source modeling software for quick 3D creation.",
    url: "https://dust3d.org/",
    imageUrl: getIconUrl("https://dust3d.org/"),
  },
  {
    title: "TreeIt",
    description: "Easy to use real-time 3D tree generator.",
    url: "https://www.evolved-software.com/treeit/treeit",
    imageUrl: getIconUrl("https://www.evolved-software.com/treeit/treeit"),
  },
  {
    title: "Cascadeur",
    description: "Standalone software for keyframe animation of 3D characters.",
    url: "https://cascadeur.com/",
    imageUrl: getIconUrl("https://cascadeur.com/"),
  },
  {
    title: "Natron",
    description:
      "Open Source Compositing Software for VFX and Motion Graphics.",
    url: "https://natrongithub.github.io/",
    imageUrl: getIconUrl("https://natrongithub.github.io/"),
  },
  {
    title: "PureRef",
    description: "Simple tool to view and organize reference images.",
    url: "https://www.pureref.com/",
    imageUrl: getIconUrl("https://www.pureref.com/"),
  },
  {
    title: "Meshroom",
    description: "Free, open-source 3D Photogrammetry Software.",
    url: "https://alicevision.org/#meshroom",
    imageUrl: getIconUrl("https://alicevision.org/#meshroom"),
  },
  {
    title: "COLMAP",
    description:
      "Reconstruct 3D models from ordered or unordered image collections automatically.",
    url: "https://colmap.github.io/",
    imageUrl: getIconUrl("https://colmap.github.io/"),
  },
  {
    title: "3DF Zephyr Free",
    description:
      "Free version of 3DF Zephyr photogrammetry software for personal use.",
    url: "https://www.3dflow.net/3df-zephyr-free/",
    imageUrl: getIconUrl("https://www.3dflow.net/3df-zephyr-free/"),
  },
  {
    title: "MicMac",
    description:
      "Free open-source photogrammetric suite for 3D reconstruction.",
    url: "https://micmac.ensg.eu/",
    imageUrl: getIconUrl("https://micmac.ensg.eu/"),
  },
  {
    title: "RealityCapture",
    description:
      "Create virtual reality scenes and 3D meshes from images and laser scans.",
    url: "https://www.capturingreality.com/",
    imageUrl: getIconUrl("https://www.capturingreality.com/"),
  },
  {
    title: "Agisoft Metashape",
    description:
      "Professional photogrammetric processing software for digital images.",
    url: "https://www.agisoft.com/",
    imageUrl: getIconUrl("https://www.agisoft.com/"),
  },
  {
    title: "RealityScan",
    description:
      "Free 3D scanning app that turns smartphone photos into high-fidelity 3D models.",
    url: "https://www.unrealengine.com/en-US/realityscan",
    imageUrl: getIconUrl("https://www.unrealengine.com/en-US/realityscan"),
  },
  {
    title: "Quixel Mixer",
    description:
      "Create photorealistic, tileable materials with powerful mixing and painting.",
    url: "https://quixel.com/mixer",
    imageUrl: getIconUrl("https://quixel.com/mixer"),
  },
  {
    title: "NVIDIA Texture Tools",
    description:
      "Create compressed texture files using NVIDIA's CUDA-accelerated technology.",
    url: "https://developer.nvidia.com/nvidia-texture-tools-exporter",
    imageUrl: getIconUrl(
      "https://developer.nvidia.com/nvidia-texture-tools-exporter"
    ),
  },
  {
    title: "Materialize",
    description: "Standalone tool for creating materials from images.",
    url: "http://www.boundingboxsoftware.com/materialize/",
    imageUrl: getIconUrl("http://www.boundingboxsoftware.com/materialize/"),
  },
  {
    title: "TextureLab",
    description: "Tool designed for procedural texture generation.",
    url: "https://texture-lab.com/",
    imageUrl: getIconUrl("https://texture-lab.com/"),
  },
  {
    title: "AwesomeBump",
    description:
      "Generate normal, height, specular or ambient occlusion textures from a single image.",
    url: "https://github.com/kmkolasinski/AwesomeBump",
    imageUrl: getIconUrl("https://github.com/kmkolasinski/AwesomeBump"),
  },
  {
    title: "Agisoft De-Lighter",
    description: "Free tool designed to remove shadows from model textures.",
    url: "https://www.agisoft.com/downloads/delighter/",
    imageUrl: getIconUrl("https://www.agisoft.com/downloads/delighter/"),
  },
  {
    title: "Normalizer",
    description:
      "Convert normal maps to displacement maps, edit and combine multiple normal maps.",
    url: "https://github.com/codegoose/normalizer",
    imageUrl: getIconUrl("https://github.com/codegoose/normalizer"),
  },
  {
    title: "Agama Materials",
    description: "Software for creating PBR materials and painting 3D models.",
    url: "https://agama.itch.io/agama-materials",
    imageUrl: getIconUrl("https://agama.itch.io/agama-materials"),
  },
  {
    title: "Dream Textures",
    description: "Stable Diffusion built-in to the Blender shader editor.",
    url: "https://github.com/carson-katri/dream-textures",
    imageUrl: getIconUrl("https://github.com/carson-katri/dream-textures"),
  },
  {
    title: "FaceBuilder",
    description:
      "Blender add-on for creating photorealistic 3D models of faces and heads from photographs.",
    url: "https://www.keentools.io/download/facebuilder-for-blender",
    imageUrl: getIconUrl(
      "https://www.keentools.io/download/facebuilder-for-blender"
    ),
  },
  {
    title: "Tiny Eye",
    description:
      "Free, fully procedural, stylised eye generator that works in Eevee and Cycles.",
    url: "https://tinynocky.gumroad.com/l/tinyeye",
    imageUrl: getIconUrl("https://tinynocky.gumroad.com/l/tinyeye"),
  },
  {
    title: "Wolf Generators",
    description:
      "Pack of 16 geometry nodes generators for bridges, cables, chains, particles, and more.",
    url: "https://3d-wolf.com/products/assets/generators/",
    imageUrl: getIconUrl("https://3d-wolf.com/products/assets/generators/"),
  },
  {
    title: "Buildify",
    description: "Geometry nodes library for easy building creation.",
    url: "https://paveloliva.gumroad.com/l/buildify",
    imageUrl: getIconUrl("https://paveloliva.gumroad.com/l/buildify"),
  },
  {
    title: "Building Tools",
    description: "Building generation addon for Blender.",
    url: "https://github.com/ranjian0/building_tools",
    imageUrl: getIconUrl("https://github.com/ranjian0/building_tools"),
  },
  {
    title: "Blender Data Visualisation",
    description: "Load data into Blender and create visualisations.",
    url: "https://github.com/Griperis/BlenderDataVis",
    imageUrl: getIconUrl("https://github.com/Griperis/BlenderDataVis"),
  },
  {
    title: "BookGen",
    description: "Free book-generation addon for Blender.",
    url: "https://oweissbarth.de/software/book-gen-blender-addon/",
    imageUrl: getIconUrl(
      "https://oweissbarth.de/software/book-gen-blender-addon/"
    ),
  },
  {
    title: "Celtic Knot",
    description:
      "Generate bezier curves, pipes and ribbons in elaborate weavings.",
    url: "https://github.com/BorisTheBrave/celtic-knot/wiki/Gallery",
    imageUrl: getIconUrl(
      "https://github.com/BorisTheBrave/celtic-knot/wiki/Gallery"
    ),
  },
  {
    title: "Data-FX",
    description:
      "Loads and visualizes different types of data within Blender from .csv files.",
    url: "https://github.com/LandonFerg/Data-FX",
    imageUrl: getIconUrl("https://github.com/LandonFerg/Data-FX"),
  },
  {
    title: "Electric Line Generator",
    description: "Addon for generating complex electric power lines.",
    url: "https://blenderesse.gumroad.com/l/electriclinegenerator",
    imageUrl: getIconUrl(
      "https://blenderesse.gumroad.com/l/electriclinegenerator"
    ),
  },
  {
    title: "Geometry Nodes Demo",
    description:
      "Free examples of geometry nodes including procedural buildings and hex grid maps.",
    url: "https://www.blender.org/download/demo-files/#geometry-nodes",
    imageUrl: getIconUrl(
      "https://www.blender.org/download/demo-files/#geometry-nodes"
    ),
  },
  {
    title: "Geometry Nodes Pipes",
    description: "Addon for generating complex pipe layouts.",
    url: "https://raywakui.gumroad.com/l/pcxni",
    imageUrl: getIconUrl("https://raywakui.gumroad.com/l/pcxni"),
  },
  {
    title: "HGen",
    description: "Blender hair generation and manipulating tool.",
    url: "https://gumroad.com/l/HGen_nd9h",
    imageUrl: getIconUrl("https://gumroad.com/l/HGen_nd9h"),
  },
  {
    title: "Industrial Geonodes",
    description:
      "Collection of industrial themed Geometry nodes for pipes, vents and catwalks.",
    url: "https://ko-fi.com/s/8d276833cf",
    imageUrl: getIconUrl("https://ko-fi.com/s/8d276833cf"),
  },
  {
    title: "Mesh Maze",
    description: "Blender add-on to generate a maze on any mesh.",
    url: "https://github.com/elfnor/mesh_maze",
    imageUrl: getIconUrl("https://github.com/elfnor/mesh_maze"),
  },
  {
    title: "Modular Tree",
    description: "Addon for creating realistic trees with the node editor.",
    url: "https://github.com/MaximeHerpin/modular_tree/tree/blender_28",
    imageUrl: getIconUrl(
      "https://github.com/MaximeHerpin/modular_tree/tree/blender_28"
    ),
  },
  {
    title: "Animation Nodes",
    description:
      "Node based visual scripting system for motion graphics in Blender.",
    url: "https://animation-nodes.com/",
    imageUrl: getIconUrl("https://animation-nodes.com/"),
  },
  {
    title: "AnimAide",
    description: "Free add-on with helpful tools for animation in Blender.",
    url: "https://github.com/aresdevo/animaide",
    imageUrl: getIconUrl("https://github.com/aresdevo/animaide"),
  },
  {
    title: "Commotion",
    description: "Blender add-on for motion graphics.",
    url: "https://github.com/mrachinskiy/commotion",
    imageUrl: getIconUrl("https://github.com/mrachinskiy/commotion"),
  },
  {
    title: "Animax",
    description:
      "Procedural animation system for Blender, useful for animating multiple objects.",
    url: "https://blendermarket.com/products/animax---procedural-animation-system-",
    imageUrl: getIconUrl(
      "https://blendermarket.com/products/animax---procedural-animation-system-"
    ),
  },
  {
    title: "AutoMask",
    description:
      "Blender Add-on for automatic rotoscoping using Machine Learning.",
    url: "https://github.com/lukas-blecher/AutoMask",
    imageUrl: getIconUrl("https://github.com/lukas-blecher/AutoMask"),
  },
  {
    title: "COA Tools",
    description:
      "2D Animation Suite for Blender with cutout animation workflow.",
    url: "https://github.com/ndee85/coa_tools",
    imageUrl: getIconUrl("https://github.com/ndee85/coa_tools"),
  },
  {
    title: "reflow",
    description: "Blender addon to change fps.",
    url: "https://gitlab.com/diegogangl/reflow",
    imageUrl: getIconUrl("https://gitlab.com/diegogangl/reflow"),
  },
  {
    title: "Keyframe Nudge",
    description: "Scripts for quick keyframe manipulation.",
    url: "https://github.com/okuma10/Keyframe-Nudge",
    imageUrl: getIconUrl("https://github.com/okuma10/Keyframe-Nudge"),
  },
  {
    title: "Shape Keys+",
    description:
      "Panel with extra options for creating, sorting, viewing, and driving shape keys.",
    url: "https://blenderartists.org/t/shape-keys/680636",
    imageUrl: getIconUrl("https://blenderartists.org/t/shape-keys/680636"),
  },
  {
    title: "Stop-Mo",
    description:
      "Transform animations into beautiful, hand-crafted stop motion style.",
    url: "https://blendermarket.com/products/stop-mo",
    imageUrl: getIconUrl("https://blendermarket.com/products/stop-mo"),
  },
  {
    title: "BlendyPose",
    description: "Blender Motion Capture using your camera.",
    url: "https://github.com/zonkosoft/BlendyPose",
    imageUrl: getIconUrl("https://github.com/zonkosoft/BlendyPose"),
  },
  {
    title: "BlenRig",
    description:
      "Auto-rigging and skinning system with Feature Film quality rig and advanced facial system.",
    url: "https://www.blendermarket.com/products/blenrig",
    imageUrl: getIconUrl("https://www.blendermarket.com/products/blenrig"),
  },
  {
    title: "Rig on the Fly",
    description:
      "Dynamic rigging tool to simplify and speed up animation workflow.",
    url: "https://gitlab.com/dypsloom/rigonthefly",
    imageUrl: getIconUrl("https://gitlab.com/dypsloom/rigonthefly"),
  },
  {
    title: "Auto-Rig Pro",
    description:
      "Addon for rigging characters, retargeting animations, and FBX export with Unity/Unreal presets.",
    url: "https://blendermarket.com/products/auto-rig-pro",
    imageUrl: getIconUrl("https://blendermarket.com/products/auto-rig-pro"),
  },
  {
    title: "Rigacar",
    description: "Generate complete rigs for standard car models quickly.",
    url: "http://digicreatures.net/articles/rigacar.html",
    imageUrl: getIconUrl("http://digicreatures.net/articles/rigacar.html"),
  },
  {
    title: "Wiggle Bones",
    description:
      "Jiggle bone implementation for Blender with realistic physics.",
    url: "https://blenderartists.org/t/wiggle-2/1454788",
    imageUrl: getIconUrl("https://blenderartists.org/t/wiggle-2/1454788"),
  },
  {
    title: "Spring Bones",
    description: "Blender addon to add spring/bouncy dynamic effect to bones.",
    url: "https://github.com/artellblender/springbones",
    imageUrl: getIconUrl("https://github.com/artellblender/springbones"),
  },
  {
    title: "WritingAnimation",
    description:
      "Add-on that generates writing animation for selected Bezier curves.",
    url: "https://github.com/Shriinivas/writinganimation",
    imageUrl: getIconUrl("https://github.com/Shriinivas/writinganimation"),
  },
  {
    title: "Typewriter",
    description: "Typewriter text animation for font objects.",
    url: "https://github.com/doakey3/blender-typewriter-addon",
    imageUrl: getIconUrl("https://github.com/doakey3/blender-typewriter-addon"),
  },
  {
    title: "TextCounter",
    description: "Easy to use text animation plugin for GUI simulations.",
    url: "https://github.com/leomoon-studios/leomoon-textcounter/",
    imageUrl: getIconUrl(
      "https://github.com/leomoon-studios/leomoon-textcounter/"
    ),
  },
  {
    title: "Blender Reddit Contests",
    description:
      "Regular 3D art contests hosted by the Blender Reddit community.",
    url: "https://www.reddit.com/r/blender/",
    imageUrl: getIconUrl("https://www.reddit.com/r/blender/"),
  },
  {
    title: "Blender Artists Contests",
    description:
      "Official contests hosted on the Blender Artists community forum.",
    url: "https://blenderartists.org/c/contests",
    imageUrl: getIconUrl("https://blenderartists.org/c/contests"),
  },
  {
    title: "pwnisher Challenges",
    description:
      "Clinton Jones' YouTube channel regularly organizes 3D Challenges.",
    url: "https://www.youtube.com/c/pwnisher/videos",
    imageUrl: getIconUrl("https://www.youtube.com/c/pwnisher/videos"),
  },
  {
    title: "MACHIN3tools",
    description:
      "Free, continuously evolving collection of blender tools and pie menus in a single customizable package.",
    url: "https://gumroad.com/l/MACHIN3tools",
    imageUrl: getIconUrl("https://gumroad.com/l/MACHIN3tools"),
  },
  {
    title: "QBlocker",
    description: "Interactive object creation tool for Blender.",
    url: "https://qblockerdocs.readthedocs.io/",
    imageUrl: getIconUrl("https://qblockerdocs.readthedocs.io/"),
  },
  {
    title: "fspy",
    description:
      "Open-source camera matching app for modeling from reference images.",
    url: "https://fspy.io/",
    imageUrl: getIconUrl("https://fspy.io/"),
  },
  {
    title: "PolyQuilt",
    description:
      "Provides functions in edit mode like creating faces, knife tool, fan, edge-loops using only left-mouse-button.",
    url: "https://github.com/sakana3/PolyQuilt",
    imageUrl: getIconUrl("https://github.com/sakana3/PolyQuilt"),
  },
  {
    title: "Modeling Cloth",
    description: "Create real-time cloth-like behavior in meshes in Blender.",
    url: "https://github.com/the3dadvantage/Modeling-Cloth-2_8",
    imageUrl: getIconUrl(
      "https://github.com/the3dadvantage/Modeling-Cloth-2_8"
    ),
  },
  {
    title: "KeKit",
    description:
      "Brings much needed functionality to Blender with production tools.",
    url: "https://ke-code.xyz/scripts/kekit.html",
    imageUrl: getIconUrl("https://ke-code.xyz/scripts/kekit.html"),
  },
  {
    title: "Array Tools",
    description:
      "Create translation, scale, rotation array with offset or global parameters in any direction.",
    url: "https://github.com/Elreenys/array_tools",
    imageUrl: getIconUrl("https://github.com/Elreenys/array_tools"),
  },
  {
    title: "BezierUtility",
    description: "Tools for working with Bezier curves.",
    url: "https://github.com/Shriinivas/blenderbezierutils",
    imageUrl: getIconUrl("https://github.com/Shriinivas/blenderbezierutils"),
  },
  {
    title: "Mesh Heal",
    description: "Additional operators for healing surface meshes.",
    url: "https://blenderartists.org/t/mesh-heal/1117095",
    imageUrl: getIconUrl("https://blenderartists.org/t/mesh-heal/1117095"),
  },
  {
    title: "JewelCraft",
    description: "Jewelry design toolkit add-on for Blender.",
    url: "https://github.com/mrachinskiy/jewelcraft",
    imageUrl: getIconUrl("https://github.com/mrachinskiy/jewelcraft"),
  },
  {
    title: "Box Select X-Ray",
    description:
      "Modified box select tool that automatically toggles x-ray mode during selection.",
    url: "https://blenderartists.org/t/box-select-x-ray/1212316",
    imageUrl: getIconUrl(
      "https://blenderartists.org/t/box-select-x-ray/1212316"
    ),
  },
  {
    title: "Polysweeper",
    description: "Tool to sweep a face profile along a face loop.",
    url: "https://blenderartists.org/t/polysweeper-0-81/1147066",
    imageUrl: getIconUrl(
      "https://blenderartists.org/t/polysweeper-0-81/1147066"
    ),
  },
  {
    title: "Drop It",
    description: "Fast and simple tool to drop Objects to Ground or Surface.",
    url: "https://blenderartists.org/t/drop-it-free-addon/1244259/",
    imageUrl: getIconUrl(
      "https://blenderartists.org/t/drop-it-free-addon/1244259/"
    ),
  },
  {
    title: "Interactive Tools",
    description:
      "Collection of intuitive, context sensitive tools for Blender.",
    url: "https://gumroad.com/l/ynJmIV",
    imageUrl: getIconUrl("https://gumroad.com/l/ynJmIV"),
  },
  {
    title: "Synced Modifiers",
    description:
      "Add modifiers to multiple objects and sync them using Drivers.",
    url: "https://amanbairwal.gumroad.com/l/SyncedModifiers",
    imageUrl: getIconUrl("https://amanbairwal.gumroad.com/l/SyncedModifiers"),
  },
  {
    title: "BlenderBIM",
    description:
      "Add-on for beautiful, detailed, and data-rich OpenBIM with Blender.",
    url: "https://blenderbim.org/",
    imageUrl: getIconUrl("https://blenderbim.org/"),
  },
  {
    title: "CAD Sketcher",
    description:
      "Free and open-source project for CAD-like tools and features in Blender.",
    url: "https://www.cadsketcher.com/",
    imageUrl: getIconUrl("https://www.cadsketcher.com/"),
  },
  {
    title: "CAD Transform",
    description:
      "Intuitive snap workflow with precise move/rotate/scale using advanced snap options.",
    url: "https://blenderartists.org/t/cad-like-transform/1226197",
    imageUrl: getIconUrl(
      "https://blenderartists.org/t/cad-like-transform/1226197"
    ),
  },
  {
    title: "MeasureIt-ARCH",
    description: "Expansion of MeasureIt addon for Architectural Drawings.",
    url: "https://github.com/kevancress/MeasureIt_ARCH",
    imageUrl: getIconUrl("https://github.com/kevancress/MeasureIt_ARCH"),
  },
  {
    title: "JARCH-Vis",
    description:
      "Add-on for creating commonly used objects for architectural visualization.",
    url: "https://github.com/BlendingJake/JARCH-Vis",
    imageUrl: getIconUrl("https://github.com/BlendingJake/JARCH-Vis"),
  },
  {
    title: "retopoflow",
    description: "Suite of retopology tools for Blender.",
    url: "https://blendermarket.com/products/retopoflow",
    imageUrl: getIconUrl("https://blendermarket.com/products/retopoflow"),
  },
  {
    title: "InstantMeshesRemesh",
    description: "Suite of retopology tools for Blender.",
    url: "https://blenderartists.org/t/instant-meshes-remesh/1114982",
    imageUrl: getIconUrl(
      "https://blenderartists.org/t/instant-meshes-remesh/1114982"
    ),
  },
  {
    title: "SpeedRetopo",
    description: "Free add-on for fast and easy retopology using Bsurface.",
    url: "https://gumroad.com/l/speedretopo",
    imageUrl: getIconUrl("https://gumroad.com/l/speedretopo"),
  },
  {
    title: "Retopo MT",
    description:
      "Tool for retopology, used in addition with other addons in Edit Mode.",
    url: "https://gumroad.com/l/cNGNb",
    imageUrl: getIconUrl("https://gumroad.com/l/cNGNb"),
  },
  {
    title: "KIT OPS",
    description:
      "Create objects and scenes efficiently with complex industrial designs.",
    url: "https://gumroad.com/l/kitops",
    imageUrl: getIconUrl("https://gumroad.com/l/kitops"),
  },
  {
    title: "ND",
    description: "Free non-destructive & interactive hard surface toolkit.",
    url: "https://hugemenace.gumroad.com/l/nd-blender-addon",
    imageUrl: getIconUrl("https://hugemenace.gumroad.com/l/nd-blender-addon"),
  },
  {
    title: "Bevel After Boolean",
    description: "Addon for working with booleans that have curved surfaces.",
    url: "https://blenderartists.org/t/wip-bevel-after-boolean/693072",
    imageUrl: getIconUrl(
      "https://blenderartists.org/t/wip-bevel-after-boolean/693072"
    ),
  },
  {
    title: "EdgeFlow",
    description: "Addon that adds operators for edgeloop selections.",
    url: "https://github.com/BenjaminSauder/EdgeFlow",
    imageUrl: getIconUrl("https://github.com/BenjaminSauder/EdgeFlow"),
  },
  {
    title: "Engraver",
    description: "Tools designed to help carving decals in 3D models.",
    url: "https://gumroad.com/l/qOyVO",
    imageUrl: getIconUrl("https://gumroad.com/l/qOyVO"),
  },
  {
    title: "JMesh Tools",
    description:
      "Hardsurface utility addon for fast boolean and bevel operations.",
    url: "https://github.com/jayanam/jmesh-tools",
    imageUrl: getIconUrl("https://github.com/jayanam/jmesh-tools"),
  },
  {
    title: "Offset Edges",
    description:
      "CAD-like feature to create edges with consistent distance from original ones.",
    url: "https://blenderartists.org/t/offset-edges/584283",
    imageUrl: getIconUrl("https://blenderartists.org/t/offset-edges/584283"),
  },
  {
    title: "Mesh Utils",
    description:
      "Tools for overlapping vert/edge/face, interior faces, edges by trait, and more.",
    url: "https://github.com/rpopovici/mesh-utils",
    imageUrl: getIconUrl("https://github.com/rpopovici/mesh-utils"),
  },
  {
    title: "Poly Source",
    description:
      "Tool to control and view different types of polygons in active objects.",
    url: "https://gumroad.com/l/polysource",
    imageUrl: getIconUrl("https://gumroad.com/l/polysource"),
  },
  {
    title: "Blender-Sculpt-Tools",
    description: "Addon for sculpting base mesh like Zbrush with Zsphere.",
    url: "https://github.com/anfeo/Blender-Sculpt-Tools",
    imageUrl: getIconUrl("https://github.com/anfeo/Blender-Sculpt-Tools"),
  },
  {
    title: "Sculpt Alphas Manager",
    description:
      "Simple solution to quickly switch alpha textures for sculpt brushes.",
    url: "https://blenderartists.org/t/sculpt-alphas-manager/1200725",
    imageUrl: getIconUrl(
      "https://blenderartists.org/t/sculpt-alphas-manager/1200725"
    ),
  },
  {
    title: "GoB",
    description: "GoZ-alike tools for simple ZBrush-Blender interchange.",
    url: "https://github.com/JoseConseco/GoB",
    imageUrl: getIconUrl("https://github.com/JoseConseco/GoB"),
  },
  {
    title: "Brush Manager",
    description: "Add-on to create, store and organize custom brushes library.",
    url: "https://gumroad.com/l/zLBPz",
    imageUrl: getIconUrl("https://gumroad.com/l/zLBPz"),
  },
  {
    title: "Mesh Align Plus",
    description:
      "Precisely align, move, and measure+match objects and mesh parts.",
    url: "https://github.com/egtwobits/mesh_mesh_align_plus",
    imageUrl: getIconUrl("https://github.com/egtwobits/mesh_mesh_align_plus"),
  },
  {
    title: "Easy Align",
    description:
      "Align mesh objects origins and objects to each other in Edit and Object mode.",
    url: "https://github.com/sergeod9/Easy_Align_Addon",
    imageUrl: getIconUrl("https://github.com/sergeod9/Easy_Align_Addon"),
  },
  {
    title: "Blign",
    description: "Alignment and distribution tool with many options.",
    url: "https://jack-cooke.github.io/blign/",
    imageUrl: getIconUrl("https://jack-cooke.github.io/blign/"),
  },
  {
    title: "Tissue",
    description: "Add-on for computational design.",
    url: "https://github.com/alessandro-zomparelli/tissue",
    imageUrl: getIconUrl("https://github.com/alessandro-zomparelli/tissue"),
  },
  {
    title: "Mech/Fy",
    description: "Procedural workflow that automates hard surfaces modelling.",
    url: "https://gumroad.com/l/KZllV",
    imageUrl: getIconUrl("https://gumroad.com/l/KZllV"),
  },
  {
    title: "RandoMesh",
    description: "Addon to add randomized geometry to any mesh.",
    url: "https://github.com/mantissa-/RandoMesh",
    imageUrl: getIconUrl("https://github.com/mantissa-/RandoMesh"),
  },
  {
    title: "SliceMesh",
    description: "Simple script to automate mesh slicing.",
    url: "https://github.com/mantissa-/SliceMesh",
    imageUrl: getIconUrl("https://github.com/mantissa-/SliceMesh"),
  },
  {
    title: "SuperPoke",
    description: "Iterative poking tool for Blender.",
    url: "https://github.com/mantissa-/SuperPoke",
    imageUrl: getIconUrl("https://github.com/mantissa-/SuperPoke"),
  },
  {
    title: "MegaGrid",
    description: "Simple Python script to randomly spam subdivisions.",
    url: "https://github.com/mantissa-/MegaGrid",
    imageUrl: getIconUrl("https://github.com/mantissa-/MegaGrid"),
  },
  {
    title: "BY-GEN",
    description:
      "Addon for non-destructive, generative modeling styles in Blender.",
    url: "https://gumroad.com/l/BY-GEN",
    imageUrl: getIconUrl("https://gumroad.com/l/BY-GEN"),
  },
  {
    title: "Fiber Mesh",
    description: "Generate fiber meshes.",
    url: "https://blenderartists.org/t/fiber-mesh-resurrected-for-2-80/1141872",
    imageUrl: getIconUrl(
      "https://blenderartists.org/t/fiber-mesh-resurrected-for-2-80/1141872"
    ),
  },
  {
    title: "Laser Slicer",
    description:
      "Cuts up objects and exports slices to SVG files for laser cutting.",
    url: "https://github.com/rgsouthall/laser_slicer",
    imageUrl: getIconUrl("https://github.com/rgsouthall/laser_slicer"),
  },
];

// Define challenge resources
const challengeResources: Resource[] = [
  {
    title: "Nodevember",
    description:
      "A month-long challenge focused on procedural art and node-based workflows.",
    url: "https://nodevember.io/",
    imageUrl: getIconUrl("https://nodevember.io/"),
  },
  {
    title: "SculptJanuary",
    description:
      "31-day sculpting challenge to improve your 3D sculpting skills.",
    url: "https://www.cgboost.com/challenges",
    imageUrl: getIconUrl("https://www.cgboost.com/challenges"),
  },
  {
    title: "36 Days of Type",
    description:
      "Annual open call for designers and artists to share their interpretations of letters and numbers.",
    url: "http://www.36daysoftype.com/",
    imageUrl: getIconUrl("http://www.36daysoftype.com/"),
  },
  {
    title: "Reddit Blender Contests",
    description:
      "Regular 3D art competitions hosted by the Blender Reddit community.",
    url: "https://www.reddit.com/r/blender/",
    imageUrl: getIconUrl("https://www.reddit.com/r/blender/"),
  },
  {
    title: "BlenderArtists Contests",
    description: "Official Blender community competitions and challenges.",
    url: "https://blenderartists.org/c/contests",
    imageUrl: getIconUrl("https://blenderartists.org/c/contests"),
  },
  {
    title: "Render Challenge",
    description:
      "Weekly updated database of 3D art challenges with regular notifications.",
    url: "https://renderchallenge.com/",
    imageUrl: getIconUrl("https://renderchallenge.com/"),
  },
  {
    title: "Pwnisher Challenges",
    description: "Regular 3D challenges hosted by Clinton Jones on YouTube.",
    url: "https://www.youtube.com/c/pwnisher/videos",
    imageUrl: getIconUrl("https://www.youtube.com/c/pwnisher/videos"),
  },
];

// Combine all resources and remove duplicates
export const resources: Resource[] = [
  ...baseResources,
  ...challengeResources,
].filter((resource, index, self) => {
  // Normalize URLs by removing trailing slashes and protocol
  const normalizeUrl = (url: string) =>
    url.replace(/https?:\/\//, "").replace(/\/$/, "");

  // Find first occurrence of URL
  return (
    index ===
    self.findIndex((r) => normalizeUrl(r.url) === normalizeUrl(resource.url))
  );
});

// Define main groups with comprehensive categorization
export const mainGroups: MainGroup[] = [
  {
    title: "3D Model Libraries",
    subgroups: [
      {
        title: "General Models",
        resources: resources.filter((r) =>
          [
            "TurboSquid",
            "CGTrader",
            "Sketchfab",
            "Free3D",
            "3DExport",
            "Clara.io",
            "3dsky",
            "Adobe Stock 3D",
            "Poly Haven",
            "Quixel Megascans",
            "TheBaseMesh",
            "3DB3",
            "Rigmodels",
            "RockThe3D",
            "Hum3D",
            "Blendswap",
            "Blend Swap",
            "Blender Market",
            "Blender Boom",
            "RenderHub",
            "KitBash3d",
            "Open3DModel",
            "Archive3D",
            "3D Model Haven",
            "BlenderNation Models",
            "Mantissa Resources",
            "Rain v2",
            "Snow v2",
          ].includes(r.title)
        ),
      },
      {
        title: "Cultural Heritage",
        resources: resources.filter((r) =>
          [
            "Scan the World",
            "Artec 3D",
            "Three D Scans",
            "3D Digitization Smithsonian",
            "Paris Musées Collections",
            "The Met Collection",
            "Smithsonian Open Access",
            "Birmingham Museums Trust",
            "Wikimedia Commons Art",
            "Art Institute of Chicago",
            "Natural History Museum Data Portal",
          ].includes(r.title)
        ),
      },
      {
        title: "Architecture",
        resources: resources.filter((r) =>
          [
            "FlyingArchitecture",
            "3D Warehouse",
            "Free3DBase",
            "Chocofur",
            "Dimensiva",
          ].includes(r.title)
        ),
      },
    ],
  },
  {
    title: "Texturing & Materials",
    subgroups: [
      {
        title: "Material Libraries",
        resources: resources.filter((r) =>
          [
            "Poly Haven Textures",
            "ambientCG",
            "cgbookcase",
            "FreePBR",
            "ShareTextures",
            "Texture.Ninja",
            "3DXO",
            "Texture Box",
            "Texture Fun",
            "MaterialX Library",
            "LotPixel",
            "Poly",
            "IES Library",
            "WildTextures",
            "Textures.com",
            "Substance Share",
            "Material.Style",
            "Texture Haven",
            "Blendermada",
            "BlenderKit",
            "Meta's Massivest Materials",
            "Solar Textures",
          ].includes(r.title)
        ),
      },
      {
        title: "Texture Creation Tools",
        resources: resources.filter((r) =>
          [
            "Substance 3D Painter",
            "ArmorPaint",
            "Quixel Mixer",
            "Material Maker",
            "TextureLab",
            "NVIDIA Texture Tools",
            "Materialize",
            "AwesomeBump",
            "Dream Textures",
            "Agama Materials",
          ].includes(r.title)
        ),
      },
      {
        title: "UV & Baking Tools",
        resources: resources.filter((r) =>
          [
            "UV Packer",
            "DreamUV",
            "TexTools",
            "Poliigon Uber Mapping Node",
            "Parallax Mapping",
            "Texel Density Checker",
            "UV Toolkit",
            "Magic-UV",
            "EasyBake",
            "Principled-Baker",
            "Blender Addon PBR",
            "PBR Texture Mapper",
            "Poliigon Material Converter",
            "SCATTr",
            "Vertex Oven",
            "Bake Wrangler",
            "3D-Coat Applink",
            "Lily Surface Scrapper",
            "glslTexture",
            "Bake to Vertex Color",
            "EZ Baker",
            "Bystedts Blender Baker",
            "Flow Map Painter",
            "Grungit",
            "Layer Painter",
            "Sanctus Library",
          ].includes(r.title)
        ),
      },
    ],
  },
  {
    title: "Modeling Tools",
    subgroups: [
      {
        title: "General Modeling",
        resources: resources.filter((r) =>
          [
            "MACHIN3tools",
            "QBlocker",
            "fspy",
            "PolyQuilt",
            "Modeling Cloth",
            "KeKit",
            "Array Tools",
            "BezierUtility",
            "Mesh Heal",
            "JewelCraft",
            "Box Select X-Ray",
            "Polysweeper",
            "Drop It",
            "Interactive Tools",
            "Synced Modifiers",
          ].includes(r.title)
        ),
      },
      {
        title: "CAD & Architecture",
        resources: resources.filter((r) =>
          [
            "BlenderBIM",
            "CAD Sketcher",
            "CAD Transform",
            "MeasureIt-ARCH",
            "JARCH-Vis",
            "Archipack",
            "Sverchok",
          ].includes(r.title)
        ),
      },
      {
        title: "Retopology",
        resources: resources.filter((r) =>
          [
            "retopoflow",
            "InstantMeshesRemesh",
            "SpeedRetopo",
            "Retopo MT",
            "AutoRemesher",
            "Instant Meshes",
          ].includes(r.title)
        ),
      },
      {
        title: "Hard Surface",
        resources: resources.filter((r) =>
          [
            "KIT OPS",
            "ND",
            "HardOps/Boxcutter",
            "Speedflow",
            "Bevel After Boolean",
            "EdgeFlow",
            "Engraver",
            "JMesh Tools",
            "Offset Edges",
            "Mesh Utils",
            "Poly Source",
          ].includes(r.title)
        ),
      },
      {
        title: "Sculpting",
        resources: resources.filter((r) =>
          [
            "Blender-Sculpt-Tools",
            "Sculpt Alphas Manager",
            "GoB",
            "Brush Manager",
            "ZBrushCoreMini",
            "Make Human",
          ].includes(r.title)
        ),
      },
      {
        title: "Alignment & Snapping",
        resources: resources.filter((r) =>
          ["Mesh Align Plus", "Easy Align", "Blign"].includes(r.title)
        ),
      },
    ],
  },
  {
    title: "Procedural Generation",
    subgroups: [
      {
        title: "Geometry Nodes",
        resources: resources.filter((r) =>
          [
            "Geometry Nodes",
            "Sverchok",
            "BY-GEN",
            "Wolf Generators",
            "Buildify",
            "Geometry Nodes Demo",
            "Geometry Nodes Examples",
            "Geometry Nodes Pipes",
            "Industrial Geonodes",
          ].includes(r.title)
        ),
      },
      {
        title: "Environment Generation",
        resources: resources.filter((r) =>
          [
            "Graswald",
            "The Grove 3D",
            "tree-gen",
            "TreeIt",
            "Modular Tree",
            "Building Tools",
            "Electric Line Generator",
          ].includes(r.title)
        ),
      },
      {
        title: "Specialized Generators",
        resources: resources.filter((r) =>
          [
            "Tissue",
            "Mech/Fy",
            "RandoMesh",
            "SliceMesh",
            "SuperPoke",
            "MegaGrid",
            "Fiber Mesh",
            "Laser Slicer",
            "Infinigen",
            "HGen",
            "Mesh Maze",
            "BookGen",
            "Celtic Knot",
            "Data-FX",
            "Blender Data Visualisation",
          ].includes(r.title)
        ),
      },
    ],
  },
  {
    title: "Animation & Rigging",
    subgroups: [
      {
        title: "Animation Tools",
        resources: resources.filter((r) =>
          [
            "Animation Nodes",
            "AnimAide",
            "Commotion",
            "Animax",
            "AutoMask",
            "COA Tools",
            "reflow",
            "Keyframe Nudge",
            "Shape Keys+",
            "Stop-Mo",
            "BlendyPose",
            "Cascadeur",
          ].includes(r.title)
        ),
      },
      {
        title: "Rigging Tools",
        resources: resources.filter((r) =>
          [
            "BlenRig",
            "Rig on the Fly",
            "Auto-Rig Pro",
            "Rigacar",
            "Wiggle Bones",
            "Spring Bones",
            "CharMorph",
            "MPFB",
          ].includes(r.title)
        ),
      },
      {
        title: "Motion Capture",
        resources: resources.filter((r) =>
          [
            "Mixamo",
            "Carnegie-Mellon Motion Capture",
            "Rokoko",
            "Rokoko Studio",
            "Motek Entertainment",
            "Bandai Namco Motiondataset",
            "DeepMotion",
          ].includes(r.title)
        ),
      },
      {
        title: "Text Animation",
        resources: resources.filter((r) =>
          ["WritingAnimation", "Typewriter", "TextCounter"].includes(r.title)
        ),
      },
    ],
  },
  {
    title: "Simulation & Effects",
    subgroups: [
      {
        title: "Physics Simulation",
        resources: resources.filter((r) =>
          [
            "FLIP Fluids",
            "Molecular Script",
            "Jet-Fluids",
            "projectile",
            "Mantaflow",
            "Phobos",
          ].includes(r.title)
        ),
      },
      {
        title: "Particle & Effects",
        resources: resources.filter((r) =>
          ["Particle Flow", "Molecular Script", "Tissue"].includes(r.title)
        ),
      },
    ],
  },
  {
    title: "Rendering & Visualization",
    subgroups: [
      {
        title: "Render Engines",
        resources: resources.filter((r) =>
          [
            "LuxCoreRender",
            "Octane Render",
            "V-Ray",
            "Redshift",
            "RenderMan",
            "Appleseed",
            "AMD Radeon ProRender",
            "DreamWork's MoonRay",
            "Malt",
            "E-Cycles",
            "Mitsuba Renderer",
          ].includes(r.title)
        ),
      },
      {
        title: "Lighting & HDRI",
        resources: resources.filter((r) =>
          [
            "HDRI Link",
            "Pro Lighting Studio",
            "Poly Haven HDRIs",
            "Pixar HDRI",
            "HDRLabs",
            "HDRI Hub",
            "HDRI Skies",
            "NoEmotionHDRs",
          ].includes(r.title)
        ),
      },
      {
        title: "Style & NPR",
        resources: resources.filter((r) =>
          [
            "BNPR Shaders",
            "EEVEE Comics Shader",
            "EEVEEToon",
            "Ultimate Clay Shader",
            "Pixel Art Rendering",
          ].includes(r.title)
        ),
      },
    ],
  },
  {
    title: "Reference & Learning",
    subgroups: [
      {
        title: "Reference Tools",
        resources: resources.filter((r) =>
          [
            "PureRef",
            "Dezoomify",
            "Anatomy 360",
            "Wildlife Reference Photos",
            "Earth View",
            "Areo Browser",
          ].includes(r.title)
        ),
      },
      {
        title: "Learning Resources",
        resources: resources.filter((r) =>
          [
            "Blender Guru",
            "CG Cookie",
            "Blender Cloud",
            "Computer Graphics from Scratch",
            "Blender Manual",
            "Blender Python API",
            "Blender Demo Files",
          ].includes(r.title)
        ),
      },
      {
        title: "Community",
        resources: resources.filter((r) =>
          [
            "Blender Artists",
            "Blender Stack Exchange",
            "Right-Click Select",
            "Blender Nation",
            "Blender Network",
            "Blender Today",
            "Blender Reddit",
            "Blender Discord",
          ].includes(r.title)
        ),
      },
    ],
  },
  {
    title: "Challenges & Competitions",
    subgroups: [
      {
        title: "Regular Challenges",
        resources: resources.filter((r) =>
          ["Nodevember", "SculptJanuary", "36 Days of Type"].includes(r.title)
        ),
      },
      {
        title: "Community Competitions",
        resources: resources.filter((r) =>
          [
            "Reddit Blender Contests",
            "BlenderArtists Contests",
            "Render Challenge",
            "Pwnisher Challenges",
          ].includes(r.title)
        ),
      },
    ],
  },
] as MainGroup[];

export default resources;
