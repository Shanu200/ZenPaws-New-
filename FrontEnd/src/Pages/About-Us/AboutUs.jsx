import React from 'react'
import { Link } from "react-router-dom";
import TemplateImg from "../../assets/AboutUs-Assest/Template.png";
import ManDog from "../../assets/AboutUs-Assest/man-dog.webp";
import Retiwer from "../../assets/AboutUs-Assest/golden-retiwer[1].png";
import MindDppress from "../../assets/AboutUs-Assest/mind-deppression.webp";
import Feedback from '../../Components/FeedBack/Feedback';


const AboutUs = () => {
  return (
    <div>
      <div>
        <div>
          <div className="w-full md:w-full mt-10 md:mt-0 h-[550px] absolute top-[80px]">
            <img src={TemplateImg} alt="template" className="h-full w-full " />
            <div className="md:w-[550px] h-[100px] absolute top-[115px] left-[60px] ">
              <img
                src={ManDog}
                alt="ManwithDog"
                className="h-[350px] w-[450px] rounded-[10px]"
              ></img>
            </div>
            <div className="text-[#0b0b0b]">
              <p className="text-[42px] font-bold absolute top-[120px] left-[750px]">
                <b>What is ZenPaws?</b>
              </p>
              <p className="text-[22px] absolute top-[195px] left-[750px]">
                ZenPaws is an online platform <br />
                that connects people with animal-assisted <br /> therapy
                services,offering a unique and effective way <br />
                to promote their mental well-being.
              </p>
            </div>

            <Feedback />

            <div
              style={{
                backgroundColor: "#ff871ec1",
                height: "330px",
                width: "800px",
              }}
              className="absolute top-[880px] left-[719px]"
            >
              <p className="text-[42px] font-bold absolute top-[30px] right-[505px] ">
                ZenPaws!
              </p>
              <p className="text-[20px] absolute top-[120px] right-[10px] w-[680px]">
                ZenPaws has several animal sections that are suitable for mental
                well-
                <br />
                being. You can choose the animals you like and book time with
                them <br />
                through this app. This process helps people relieve stress and
                provide <br />
                them with mental well-being.
              </p>
            </div>

            <div>
              <p className="text-[42px] font-bold absolute top-[905px] left-[90px] ">
                Our Mission
              </p>
              <p className="text-[20px] absolute top-[999px] left-[85px] w-[680px]">
                To help everyone take more care of their mental
                <br />
                health to live a happy life.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#ff910035",
                height: "330px",
                width: "1519px",
              }}
              className="absolute top-[1210px]"
            >
              <p className="text-[42px] font-bold absolute top-[105px] left-[620px] ">
                Our Story
              </p>
              <p className="text-[20px] absolute top-[200px] left-[205px] w-[1000px]">
                ZenPaws is designed to reduce anxiety and stress in people of
                all ages by fostering love, kindness, and friendship.
              </p>
            </div>

            <div className="absolute top-[1000px] left-[530px]">
              <img
                src={Retiwer}
                alt="Dog"
                className="h-[300px] w-[400px]"
              ></img>
            </div>

            <div className="absolute top-[1630px] left-[580px]">
              <img
                src={MindDppress}
                alt="man"
                className="h-[300px] w-[300px] rounded-[10px] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
              ></img>
            </div>

            <div className="">
              <p className="absolute  top-[1570px]   left-[500px]  text-[20px] w-[1000px]">
                <b>Are you depressed or dissatisfied with anything?</b>
              </p>
              <p className="absolute  top-[1960px]  left-[440px]  text-[20px] w-[1000px]">
                <b>
                  Spend time with ZenPaws animals and you will feel the
                  difference.
                </b>
              </p>

              <div
                className="bg-orange-700 w-[120px] rounded-xl absolute top-[2030px] left-[680px] transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-orange-800
              text-white px-2 py-2 text-[20px] cursor-pointer"> 
              
              <Link to="/contact">
                Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
