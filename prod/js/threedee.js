const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// const loader = new THREE.GLTFLoader();

// loader.load( './assets/3Dsquiggle.glb', function ( gltf ) {

//     model = gltf.scene;
//     model.scale.set(0.05, 0.05, 0.05); 
//     scene.add(model);
//     addLights(); // Add lights after the model is loaded

//     addEnvironmentMapReflection()
// }, undefined, function ( error ) {

//     console.error( error );

// } );

const rgbeLoader = new RGBELoader();

rgbeLoader.load('../assets/sunflowers_puresky_2k.hdr', function(texture) {
    
    texture.mapping = THREE.EquirectangularReflectionMapping;
    
    scene.background = texture;
    scene.environment = texture;
    
    render();
    
    // model
    
    const loader = new GLTFLoader();
    loader.load( '../assets/3Dsquiggle.glb', function ( gltf ) {
        
        scene.add( gltf.scene );
        
        render();
        
    } );
    
} );


camera.position.z = 5;


function animate() {
    requestAnimationFrame( animate );
    if (model) {
        model.rotation.y += -0.02; // Update rotation angle
    }
    renderer.render( scene, camera );
}
animate();

function addLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0.5, 0.5, 0.5);
    scene.add(directionalLight);
    
    const hemiLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
    scene.add( hemiLight );
}

addLights()


// function addEnvironmentMapReflection() {
//     const rgbeLoader = new RGBELoader();

//     rgbeLoader.load('../assets/sunflowers_puresky_2k.hdr', function(texture) {
//         texture.mapping = THREE.EquirectangularReflectionMapping;
//         scene.environment = texture;


//     }, undefined, function(error) {
//       console.error(error);
//     });
//   }