import { FC } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./Testimonials.module.scss";
import { TSectionData } from "@/makasi/core/section/Section.types";
import { TBackgroundParamValue } from "@/makasi/core/params/background/BackgroundParam.types";
import { TTextColorParamValue } from "@/makasi/core/params/textColor/textColorParam.types";
import { Background } from "@/makasi/primitives/Background/Background";
import { Heading } from "@/makasi/primitives/Heading/Heading";
import { Text } from "@/makasi/primitives/Text/Text";

const className = classNameModule(styles);

interface TTestimonialsProps {
  data: TSectionData<{
    background: TBackgroundParamValue;
    textColor: TTextColorParamValue;
  }>;
}

const Testimonials: FC<TTestimonialsProps> = ({ data }) => {
  return (
    <Background data={data.params.background}>
      <div {...className("Testimonials")}>
        <div {...className("container")}>
          <div {...className("columns")}>
            <div {...className("text")}>
              <Heading field="title" defaultTag="h2" />
              <Text field="text" {...className("paragraph")} />
            </div>

            <div {...className("testimonials")}>
              <div {...className("testimonial")}>
                Dan{"'"}s core strength is his ability to adapt and apply
                critical thinking to a problem. He doesn{"'"}t just take a
                project and do it, he will break it down, check it ticks all the
                boxes (including the ones you forgot about!), and then deliver
                something beyond your expectations. Work with him without
                hesitation!
              </div>
              <div {...className("testimonial")}>
                I always love working with Dan - he{"'"}s professional and
                enthusiastic and always willing to provide insight and
                suggestions for improving accessibility and functionality of a
                site or project. Couldn’t recommend him highly enough!
              </div>
              <div {...className("testimonial")}>
                We loved working with Dan and appreciate all his contributions
                to Pigeon Loans. If anyone is in the market for hiring a great
                freelance front-end developer, don’t hesitate to add Dan to your
                team.
              </div>
              <div {...className("testimonial")}>
                Over the last few months I’ve had the pleasure to work with Dan
                on the relaunch of our new marketing site. His attention to
                detail and flexibility to work with in our team’s style made him
                a delight to work with. Additionally, as an American it was
                awesome to wake up each day to a fresh package of improvements.
                To that end we are planning to employ Dan to help us modernize
                our other two sites as well.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default Testimonials;
