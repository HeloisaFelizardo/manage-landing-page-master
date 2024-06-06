import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Button, Container} from "react-bootstrap";
import './TestimonialsSection.scss'
import Image from "react-bootstrap/Image";
import avatar1 from '../../assets/images/avatar-ali.png';
import avatar2 from '../../assets/images/avatar-anisha.png'
import avatar3 from '../../assets/images/avatar-richard.png'
import avatar4 from '../../assets/images/avatar-shanai.png'

function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Comportamento padrão para telas maiores que 991px
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, // 991px and below
        settings: {
          slidesToShow: 2, // Exibir 2 boxes entre 768px e 991px
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // 767px and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="container-testimonials-section">

      <h2 className='title-testimonials'>What they've said</h2>
      <Slider className='slider' {...settings} >

        <div className='box-testimonials'>
          <Image className='avatar' src={avatar1}/>
          <div className='background'>
            <h3 className='sub-title-testimonials'>Ali Bravo</h3>
            <p>“We have been able to cancel so many other subscriptions since using Manage. There is no more
              cross-channel
              confusion and everyone is much more focused.”</p>
          </div>
        </div>

        <div className='box-testimonials'>
          <Image className='avatar' src={avatar2}/>
          <div className='background'>
            <h3 className='sub-title-testimonials'>Anisha Li</h3>
            <p>“Manage has supercharged our team’s workflow.
              The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
          </div>
        </div>

        <div className='box-testimonials'>
          <Image className='avatar' src={avatar3}/>
          <div className='background'>
            <h3 className='sub-title-testimonials'>Richard Watts</h3>
            <p>“Manage allows us to provide structure and process. It keeps us organized and focused.
              I can’t stop recommending them to everyone I talk to!”</p>
          </div>
        </div>

        <div className='box-testimonials'>
          <Image className='avatar' src={avatar4}/>
          <div className='background'>
            <h3 className='sub-title-testimonials'>Shanai Gough</h3>
            <p>“Their software allows us to track, manage and collaborate on our projects from anywhere.
              It keeps the whole team in-sync without being intrusive.”</p>
          </div>
        </div>

      </Slider>
      <Button className='btn-started show-button'>Get Started</Button>
    </Container>
  );
}

export default TestimonialsSection;
