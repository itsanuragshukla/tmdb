import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
    const [visible, setVisible] = useState(false);
    const goToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
        let maxHeight = 200;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > maxHeight) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll)
    }, []);

    return (
        <Wrapper>
            {visible && (
                <div className="top-btn" onClick={goToTop}>
                    <FaArrowUp className="up-icon"  style={{fill: "#00fff5"}}/>
                </div>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .top-btn {
    font-size: 1.5rem;
    width: 50px;
    height: 50px;
    background-color: #222831;
    border-radius: 50%;
    position: fixed;
    bottom: 35px;
    right: 25px;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    & > .up-icon {
		width:50%;
		height:50%;
      animation: gototop 1.2s linear infinite alternate-reverse;
    }
    @keyframes gototop {
      50% {
        transform: translateY(-3px);
      }
	  100%{
	  transform:translateY(3px)
	  }
    }


@media only screen and (max-width:200px){
	display:none;
}

  }
`;

export default GoToTop;
