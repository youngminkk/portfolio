import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { projects } from '../constants';
const colors = ['cornsilk', 'darkslategrey', 'floralwhite', '#252121', 'teal'];
const CardItem = ({ i, title, content, img, link, color, progress, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });
    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);
    const textColor = colors[i % colors.length];

    return (
        <div ref={container} className="card__container">
            <motion.div
                style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
                className="card__main"
            >
                <h2 style={{ color: textColor }}>{title}</h2>
                <div className="card__body">
                    <div className="card__content">
                        <p style={{ color: textColor }}>{content}</p>
                    </div>
                    <div className="card__image">
                    <a href={link} target="_blank" rel="noreferrer"> 
                        <motion.div
                            className="image__inner"
                            style={{ scale: imageScale }}
                        >
                            <img src={img} alt={title} />
                        </motion.div>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

const Card = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section id='card'>
            <div className='card'>
                <div className='site__inner'>
                    <div className='site__title '>SITE</div>
                    <div ref={container} className="card__main">
                        {
                            projects.map((project, i) => {
                                const targetScale = 1 - ((projects.length - i) * 0.05);
                                return <CardItem key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Card;