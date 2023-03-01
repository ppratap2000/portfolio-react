import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from 'framer-motion'
import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}>


            <motion.div
                variants={footerVariants}
                className={`innerWidth yPaddings flexCenter ${css.container}`}>
                <div className={css.left}>
                    <span className="primaryText">
                        Let's make something <br />
                        amazing together.
                    </span>
                    <span className="primaryText">
                        Start by <a href="mailto:pranavpratap804@gmail.com">saying hi</a>
                    </span>
                </div>

                <div className={css.right}>
                    <div className={css.info}>
                        <span className="secondaryText">Information</span>
                        <p>100,Adarsh Nagar,Tonk,Raj.(304001)</p>
                    </div>
                    <ul className={css.menu}>

                        <li><a href="https:www.linkedin.com/in/pranavpratap"><FaLinkedin size={"30px"} /></a></li>
                        <li><a href="https://github.com/ppratap2000"><FaGithub size={"30px"} /></a></li>
                        <li><a href=""><FaInstagram size={"30px"} /></a></li>
                        <li><a href=""><FaFacebook size={"30px"} /></a></li>


                    </ul>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Footer;
