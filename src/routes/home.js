import { useNavigate } from 'react-router-dom';
import '../public/stylesheets/style.css';

/**
 * @since 2023-10-28
 * @author Nathan Kwok
 * @version v1.0.0
 * 
 * 2637 WebDev training example; showcases different embedded HTML elements in React.
 */
function Home() {

  //REDIRECT TO ANOTHER PAGE
  const redirect = useNavigate();
  const change = () => {
    const path = "\\frcteam2637.org"; //absolute path: replace https:// with \\
    redirect(path);
  }

  return (
  <html>
    <head>
      <title>React 1</title>
      <link rel='icon' href="../public/images/favicon.ico"/>
    </head>
    <body>
      <div>
        <h1>React 1</h1>

        <a href='https://frcteam2637.org'>Hyperlink</a>

        <button onClick={ change }>Button</button>
        {/* onClick={} == onclick(); in HTML */}

        <img style={{height: 256 + 'px'}} src='https://www.frcteam2637.org/uploads/1/1/0/2/110284693/background-images/1523241414.jpg' alt='alternate text' />
        {/* style={} == "style=" in HTML */}

        <h2 className='test'>Navs</h2>
        {/* className='' == "class=" in HTML */}
        
        <nav>
          <a href='/'>Home </a>
          <a href='/2'>2</a>
        </nav>

        <h2 id='test'>Tables</h2>

        <table>
          <tr>
            <th>Table Header 1</th>
            <th>Table Header 2</th>
            <th>Table Header 3</th>
          </tr>
          <tr>
            <td id='test'>Table Content 1</td>
            <td>Table Content 2</td>
            <td>Table Content 3</td>
          </tr>
          <tr>
            <td>Table Content 4</td>
            <td>Table Content 5</td>
            <td>Table Content 6</td>
          </tr>
        </table>

        <form>
        <label for="form">Choose a team:</label>
        <select name="form">
            <option value="2637">2637</option>
            <option value="5199">5199</option>
            <option value="4201">4201</option>
            <option value="9999">9999</option>
          </select>
         <input type="submit" value="Submit" />
        </form>
  
      </div>
    </body>
  </html>
  );
}

export default Home;
