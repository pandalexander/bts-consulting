import IrsColorIcon from "../assets/irs-color.jpg";
import QuickbooksIcon from "../assets/quickbooks.png";
import GoogleReviews from "../assets/google-review.png";

const About = () => {
  return (
    <div className="">
      <div className="">
        <div className="relative  min-h-[800px] ">
          <div className="text-center">
            <h2 className="font-specialSerif text-5xl sm:text-6xl lg:text-7xl tracking-wide text-balance mb-10">
              About BTS Consulting
            </h2>
          </div>

          <div className="flex flex-col">
            <div className="text-lg p-6 flex-1 space-y-5">
              <p>
                Founded in 2010 in the serene setting of Volcano, Hawaii, BTS
                Consulting has grown out of a legacy of resilience and
                dedication. Its story begins with Kate and her late husband,
                Fritz, who established Tara Firma Inn - Volcano, a charming bed
                & breakfast located near the iconic Hawaii Volcanoes National
                Park. To support their growing ventures, Fritz, a master
                carpenter, launched his business, &quot;Fritz the
                Carpenter,&quot; while Kate provided tax and accounting services
                to small businesses on the Big Island.
              </p>
              <p>
                After Fritz’s passing in 2013, Kate continued to run the bed &
                breakfast until 2016 before relocating to Georgia with the
                support of her family. During her time in Greensboro and Athens,
                Kate honed her expertise in finance and business consulting,
                paving the way for new opportunities. In Colorado Springs, a
                place filled with fond memories of visiting her father, Kate
                found her perfect home to continue the success of BTS
                Consulting.
              </p>
              <p>
                Today, BTS Consulting thrives in Colorado Springs, dedicated to
                empowering small businesses with expert financial guidance and
                personalized service.
              </p>
              <div className="bg-zinc-100 rounded-lg p-6 flex items-end justify-evenly flex-wrap space-y-8 lg:space-y-2">
                <div className="flex flex-col justify-center items-center rounded-lg max-w-60">
                  <a
                    href="https://maps.app.goo.gl/UTLbG8jH1U3bMUi28"
                    target="_blank"
                  >
                    {" "}
                    <img src={GoogleReviews} alt="" className="w-full" />
                    <p className="font-thin text-zinc-600 text-center">
                      Consistent 5 star reviews
                    </p>
                  </a>
                </div>
                <a href="https://quickbooks.intuit.com/" target="_blank">
                  <div className="flex flex-col justify-center items-center rounded-lg">
                    {" "}
                    <img src={QuickbooksIcon} alt="" className="max-w-28" />
                    <p className="font-thin text-zinc-600 mt-4 text-balance text-center">
                      QuickBooks ProAdvisor Silver Tier
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.irs.gov/tax-professionals/enrolled-agents/enrolled-agent-information#:~:text=Enrolled%20agent%20status%20is%20the,)%2C%20have%20unlimited%20practice%20rights."
                  target="_blank"
                >
                  <div className="flex flex-col justify-center items-center rounded-lg max-w-80">
                    <img
                      src={IrsColorIcon}
                      alt=""
                      className="w-full rounded-lg"
                    />
                    <p className="font-thin text-zinc-600 mt-4 text-center">
                      IRS enrolled agent
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
