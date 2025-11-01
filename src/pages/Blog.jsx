import ProfileImg from "../assets/img/Profile.svg";
import BlogImg from "../assets/img/Blog.svg";

const Blog = () => {
  return (
    <main className="blog-section">
      <div className="container">
        <div className="blog-content">
          <h2>
            Breaking the code How did we <br /> build our Figma plugin{" "}
          </h2>

          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized. We aim to attain the greatest satisfaction for
            our clients
          </p>

          <div className="blog-profile">
            <img src={ProfileImg} alt="" />
            <span>Andrew Jonson</span>
            <b>Posted on 27th January 2021</b>
          </div>
        </div>

        <div className="blog-img">
          <img src={BlogImg} alt="" />
        </div>

        <div className="blog-paragraph">
          <h2>
            Transform Your Idea Into Reality with Ether a Leading Digital Agency
          </h2>

          <p>
            Writing UX copies can be a little frustrating and confusing, and
            sometimes we are unsure about how to get the right word. To crack
            the code for the UX copies, we at Zeta Design wanted to build a
            Figma plugin for the larger design community. The plugin is called
            the Ghost UXWriter and has a set of UX copies cataloged and
            categorized with a voice and tone variation ranging from plain,
            casual to playful. The intention to build this Figma plugin
            originated from our Medium blog post, ‘Designing voice and tone for
            error messages.
          </p>

          <p>
            Writing UX copies can be a little frustrating and confusing, and
            sometimes we are unsure about how to get the right word. To crack
            the code for the UX copies, we at Zeta Design wanted to build a
            Figma plugin for the larger design community. The plugin is called
            the Ghost UXWriter and has a set of UX copies cataloged.
          </p>

          <p>
            Writing UX copies can be a little frustrating and confusing, and
            sometimes we are unsure about how to get the right word. To crack
            the code for the UX copies, we at Zeta Design wanted to build a
            Figma plugin for the larger design community. The plugin is called
            the Ghost UXWriter and has a set of UX copies cataloged.
          </p>

          <p>
            Writing UX copies can be a little frustrating and confusing, and
            sometimes we are unsure about how to get the right word. To crack
            the code for the UX copies, we at Zeta Design wanted to build a
            Figma plugin for the larger design community. The plugin is called
            the Ghost UXWriter and has a set of UX copies cataloged and
            categorized with a voice and tone variation ranging from plain,
            casual to playful. The intention to build this Figma plugin
            originated from our Medium blog post, ‘Designing voice.
          </p>

          <h3>
            Transform Your Idea Into Reality with Ether a Leading Digital Agency
          </h3>

          <p>
            Step 1: Download the plugin from Figma community, search Ghost
            UXWriter
          </p>

          <p>Step 2: Open the plugin on your artboard</p>

          <p>Step 3: Click on the ‘Generate’ button</p>
          <p>Step 4: Click on the ‘Download’ button</p>
          <p>Step 5: Open the downloaded file and click on the ‘Open’ button</p>
          <p>Step 6: Click on the ‘Save’ button</p>

          <h3>
            Transform Your Idea Into Reality with Ether a Leading Digital Agency
          </h3>

          <p>
            Writing UX copies can be a little frustrating and confusing, and
            sometimes we are unsure about how to get the right word. To crack
            the code for the UX copies, we at Zeta Design wanted to build a
            Figma plugin for the larger design community. The plugin is called
            the Ghost UXWriter and has a set of UX copies cataloged and
            categorized with a voice and tone variation ranging from plain,
            casual to playful. The intention to build this Figma plugin
            originated from our Medium blog post, ‘Designing voice and tone for
            error messages.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Blog;
