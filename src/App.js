import './App.css';

function App() {
  return (
    <div>
    <a href="/">
      <img style={{width: 300 + 'px', height: 53 + 'px'}} src="/images/banner.png"></img>
    </a>
    <nav>
      <a id="link" href="/">Home*</a>
      <a id="link" href="/about">About</a>
      <a id="link" href="/contact">Contact</a>
    </nav>
    <div>
      <h1 id="welcome">Welcome to Hack Peninsula, Palos Verdes' <span>biggest</span> hackathon!</h1>
      <h2 id="subwelcome">
        Are you enthusiastic about taking part in a twelve-hour coding event, competing, and making new connections?
        Hack Peninsula is excited to welcome students aged 13 to 18, regardless of their skill level.
        We assure you that you'll have a fantastic experience!
      </h2>
    </div>
    <br></br>
    <div>
      <h2>A huge thanks to our sponsors</h2>
      <table>
        <tr>
          <td>
            <a id="link" href="https://pvnet.com/" target="_blank">
              <img style={{width: 256 + 'px', height: 256 + 'px'}} src="/images/pvnet.png"></img>
              <br></br>
              <p id="sponsor">PVNet Academy for STEM and Art</p>
            </a>
          </td>
          <td>
            <a id="link" href="https://pvnet.com/" target="_blank">
              <img style={{width: 256 + 'px', height: 256 + 'px'}} src="/images/github.png"></img>
              <br></br>
              <p id="sponsor">your mom</p>
            </a>
          </td>
        </tr>
      </table>
      <h2>Build something innovative</h2>
      <table id="innovative">
        <tr id="innovative">
          <th id="innovative">Create and Learn</th>
          <th id="innovative">Meet and Make</th>
          <th id="innovative">Get Free Swag</th>
        </tr>
        <tr id="innovative">
          <td id="innovative">
            Hackathon projects include apps and websites, 
            but feel free to create anything that you prefer. 
            Our mentors are willing to help you debug and plan your winning project.
          </td>
          <td id="innovative">
            Hackathons are a wonderful place to meet students, programmers, and friends!
            We invite all 13-18 year old students to participate in Hack Peninsula.
          </td>
          <td id="innovative">
            From snacks to shirts, we have a ton of free swag available to all attendees!
            By competiting, you'll also have the chance to win prizes!
          </td>
        </tr>
      </table>
    </div>
    <br></br>
    <h2>Frequently Asked Questions</h2>
    <ul>
        <li id="question">Q: How much does it cost to go attend Hack Peninsula?</li>
        <li id="answer">
          A: Admission is free!
          Thanks to our wonderful sponsors, we will be able to cover meals, snacks, drinks, and swag!
        </li>
        <li id="question">Q: Who can attend Hack Peninsula?</li>
        <li id="answer">
          A: We allow any intermediate or high school student between the ages of 13 to 18 to register for Hack Peninsula.
          We primarily expect attendees to be from the Palos Verdes area, but students are welcome if they can travel to and from Hack Peninsula.
        </li>
        <li id="question">Q: What if I have no experience with programming or have never attended a hackathon?</li>
        <li id="answer">
          A: Beginners are welcome to participate!
          We'll have mentors during the hackathon who are eager to assist you with anything programming your project needs.
        </li>
        <li id="question">Q: How many people can be on a team?</li>
        <li id="answer">
          A: We will limit teams to a hard limit of four people. 
          You can meet and form teams before and during the hackathon, or you can work individually if you prefer.
          We encourage you to collaborate with others and meet new friends!
        </li>
        <li id="question">Q: I have more questions that weren't listed. How can I reach you?</li>
        <li id="answer">
          Have more questions? Reach out to us at <a id="email" href="mailto:nathank@pvnet.com">nathank@pvnet.com</a>.
          We will be happy to answer any questions!
        </li> 
      </ul>
    </div>
  );
}

export default App;
