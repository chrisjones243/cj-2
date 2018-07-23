import React, { Component } from 'react';
import './App.css';
import anime from 'animejs';

class App extends Component {

  componentDidMount(){

    var nav = anime.timeline({
      autoplay: false,
      direction: 'reverse',
    }
    );

    nav

      .add({
        targets: '.nav-icon',
        rotate: ["0deg","-90deg"],
        duration: 150,
        easing: 'linear',
      })

      .add({
        targets: '.line-middle',
        rotate:["0deg","-45deg"],
        duration: 1,
        easing: [0.5,0,0.5,1],
      })

      .add({
        targets: '.line-top',
        translateY: ["6px","0px"],
        rotate: ["0deg","45deg"],
        offset: 0,
        easing: [0.5,0,0.5,1],
        duration: 250,
      })

      .add({
        targets: '.line-bottom',
        translateY: ["-6px","0px"],
        rotate: ["0deg","-45deg"],
        offset: 0,
        easing: [0.5,0,0.5,1],
        duration: 250,
      })

      .add({
        targets: '.nav-pg',
        width: ['100vw','100vw'],
        height: ['0','100vh'],
        easing: 'linear',
        duration: 150,
      })
      ;

      document.querySelector('.nav-cointainer').onclick = function() {
        nav.play();
        nav.reverse();
      };


      var open = anime.timeline();

      open

        // .add({
        //   targets: '.open-display',
        //   easing: 'linear',
        //   offset: 0,
        //   delay: 1000,
        //   width: ['100vw','0'],
        //   height: ['100vh','0'],
        //
        // })

        .add({
          targets: '#title #C',
          translateX: ['37%','0'],
          translateY: ['-317.49','-317.49'],
          easing: [0.895, 0.000, 0.500, -0.14],
        })

        .add({
          targets: '#title #J',
          translateX: ['-4%','0'],
          translateY: ['-317.49','-317.49'],
          easing: [0.895, 0.000, 0.500, -0.14],
          offset: 0,
        })

        .add({
          targets: '.pg1',
          backgroundColor: ['#000','#fff'],
          easing: [0.555, 0.030, 0.720, -0.13],
          display: ['fixed','flex'],
        })

        .add({
          targets: '.cls-2',
          fill: ['#fff','#000'],
          duration: 700,
          delay: 700,
          easing: [0.555, 0.030, 0.720, -0.13],
          offset: 0,
        })

        .add({
          targets: '.nav',
          opacity: ['0','1'],
          easing: 'linear',
          offset: 0,
          delay: 800,
        })

        .add({
          targets: '#title #H,#R,#I,#S,#O,#N,#E,#S-2',
          opacity: ['0','1'],
          easing: [0.555, 0.030, 0.720, -0.13],
        })

        ;

  }

  render() {
    return (
      <div className="App">

        <div className="nav">
          <div className="nav-pg"></div>
          <div className="nav-cointainer">
            <div className="nav-icon">
              <div className="line-top"></div>
              <div className="line-middle"></div>
              <div className="line-bottom"></div>
            </div>
          </div>
        </div>

        <div className="pg1">
          <div className="svg-container">
            <a href="http://localhost:3000/">
            <svg id="title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1892.39 366.12">
              <path id="C" class="cls-2" d="M183.57,546.06v47.55c0,57.27-28.64,90-83.86,90s-83.86-32.73-83.86-90V407.49c0-57.27,28.64-90,83.86-90s83.86,32.73,83.86,90v34.77H130.39V403.91c0-25.57-11.25-35.29-29.15-35.29S72.1,378.34,72.1,403.91V597.19c0,25.57,11.25,34.77,29.14,34.77s29.15-9.2,29.15-34.77V546.06Z" transform="translate(-15.85 -317.49)"/>
              <path id="H" class="cls-1" d="M274.07,679.52H217.82V321.58h56.25V475H338V321.58h57.27V679.52H338V526.12H274.07Z" transform="translate(-15.85 -317.49)"/>
              <path id="R" class="cls-1" d="M553.76,679.52c-3.07-9.21-5.12-14.83-5.12-44V579.3c0-33.24-11.24-45.51-36.81-45.51H492.4V679.52H436.15V321.58H521c58.29,0,83.35,27.1,83.35,82.33V432c0,36.82-11.76,60.34-36.82,72.1v1c28.13,11.76,37.33,38.35,37.33,75.68v55.22c0,17.39.51,30.17,6.14,43.47ZM492.4,372.72V482.65h22c21,0,33.75-9.2,33.75-37.84V409.53c0-25.57-8.69-36.81-28.63-36.81Z" transform="translate(-15.85 -317.49)"/><path id="I" class="cls-1" d="M641.7,321.58H698V679.52H641.7Z" transform="translate(-15.85 -317.49)"/>
              <path id="S" class="cls-1" d="M814.53,317.49c54.71,0,82.83,32.73,82.83,90v11.25H844.18V403.91c0-25.57-10.22-35.29-28.12-35.29s-28.12,9.72-28.12,35.29c0,26.07,11.25,45.51,48.06,77.72,47,41.42,61.87,71.08,61.87,112,0,57.27-28.63,90-83.86,90s-83.86-32.73-83.86-90v-22h53.18v25.57c0,25.57,11.25,34.77,29.15,34.77s29.15-9.2,29.15-34.77c0-26.08-11.25-45.51-48.07-77.72-47-41.42-61.87-71.08-61.87-112C731.69,350.22,759.81,317.49,814.53,317.49Z" transform="translate(-15.85 -317.49)"/>
              <path id="J" class="cls-2" d="M994,628.38c6.13.52,13.29.52,19.43.52,17.9,0,32.21-6.65,32.21-34.26V321.58h56.25v269c0,71.59-38.35,90-80.79,90-10.23,0-17.9,0-27.1-1Z" transform="translate(-15.85 -317.49)"/>
              <path id="O" class="cls-1" d="M1135.63,407.49c0-57.27,30.17-90,85.4-90s85.39,32.73,85.39,90V593.61c0,57.27-30.17,90-85.39,90s-85.4-32.73-85.4-90Zm56.25,189.7c0,25.57,11.25,35.28,29.15,35.28s29.14-9.71,29.14-35.28V403.91c0-25.57-11.25-35.29-29.14-35.29s-29.15,9.72-29.15,35.29Z" transform="translate(-15.85 -317.49)"/>
              <path id="N" class="cls-1" d="M1393.85,420.27h-1V679.52h-50.62V321.58h70.56l56.76,214.25h1V321.58h50.12V679.52h-57.79Z" transform="translate(-15.85 -317.49)"/>
              <path id="E" class="cls-1" d="M1617.3,472.43h77.21v51.13H1617.3V628.38h97.15v51.14h-153.4V321.58h153.4v51.14H1617.3Z" transform="translate(-15.85 -317.49)"/>
              <path id="S-2" data-name="S" class="cls-1" d="M1824.9,317.49c54.71,0,82.83,32.73,82.83,90v11.25h-53.18V403.91c0-25.57-10.22-35.29-28.12-35.29s-28.12,9.72-28.12,35.29c0,26.07,11.25,45.51,48.06,77.72,47.05,41.42,61.88,71.08,61.88,112,0,57.27-28.64,90-83.86,90s-83.86-32.73-83.86-90v-22h53.18v25.57c0,25.57,11.25,34.77,29.14,34.77s29.15-9.2,29.15-34.77c0-26.08-11.25-45.51-48.07-77.72-47-41.42-61.87-71.08-61.87-112C1742.06,350.22,1770.18,317.49,1824.9,317.49Z" transform="translate(-15.85 -317.49)"/>
            </svg>
            </a>
          </div>
        </div>

        <div className="pg2">pg2</div>

        <div className="pg3">pg3</div>


      </div>
    );
  }
}

export default App;
