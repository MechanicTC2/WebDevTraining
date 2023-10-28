import '../public/stylesheets/style.css';

/**
 * @since 2023-10-28
 * @author Nathan Kwok
 * @version v1.0.0
 * 
 * 2637 WebDev training example; showcases different embedded HTML elements in React.
 */
function Two() {
  return (
    <html>
      <head>
        <title>React 2</title>
        <link rel='stylesheet' href='../stylesheets/style.css'/>
      </head>
      <body>
        <h1>Second Page</h1>
        <a href='/'>Back to Home</a>
      </body>
    </html>
  );
}

export default Two;