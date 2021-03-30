import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
    margin: 'auto',
    height: '480px',
    width: '500px'
  };
  
function App() {
  return (
<div style={styles}>
<Carousel>
<div>
<img src="public/images/aquaman.jpg" alt="Aquaman" />
<p className="legend">Aquaman</p>
</div>
<div>
<img src="public/images/batman.jpg" alt="Batman"/>
<p className="legend">Batman</p>
</div>
<div>
<img src="public/images/cyborg.jpg" alt="Cyborg"/>
<p className="legend">Cyborg</p>
</div>
<div>
<img src="public/images/deathstroke.jpg" alt="Deathstroke"/>
<p className="legend">Deathstroke</p>
</div>
<div>
<img src="public/images/flash.jpg" alt="Flash"/>
<p className="legend">Flash</p>
</div>
<div>
<img src="public/images/superman.jpg" alt="Superman"/>
<p className="legend">Superman</p>
</div>
<div>
<img src="public/images/wonder_woman.jpg" alt="Wonder Woman"/>
<p className="legend">Wonder Woman</p>
</div>
</Carousel>
</div>
  );
}

export default App;
