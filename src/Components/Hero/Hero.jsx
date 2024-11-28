import React from "react";
import About from "../About/About";
import CompanyAbout from "../About/CompanyAbout";
import Features from "../Features/Features";
import FAQ from "../FAQ/FAQ";

export default function Hero() {
  return (
    <>
    <div className="container hero-cont">
      <div className="row main-hero">
      <h1 className="hero-heading text-center">Discover the career you've always dreamed of.</h1>
      <p className="hero-para text-center">Find the perfect job for you with our expert advice and
        resources.</p>
        <div className="search">
        <div className="job-div">
        <div className="form-group">
            <select id="category" className="hero-select" >
                <option value="">Select job</option>
                <option value="App Developer">App Developer</option>
                <option value="Game Developer">Game Developer</option>
                <option value="Web Developer">Web Developer</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="Mobile Developer">Mobile Developer</option>
                <option value="Desktop Application Developer">
                  Desktop Application Developer
                </option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="Data Analyst">Data Analyst</option>
                <option value="Machine Learning Engineer">
                  Machine Learning Engineer
                </option>
                <option value="Artificial Intelligence Engineer">
                  Artificial Intelligence Engineer
                </option>
                <option value="Big Data Engineer">Big Data Engineer</option>
                <option value="Deep Learning Specialist">
                  Deep Learning Specialist
                </option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="Cloud Engineer">Cloud Engineer</option>
                <option value="System Administrator">System Administrator</option>
                <option value="Cybersecurity Analyst">Cybersecurity Analyst</option>
                <option value="Security Engineer">Security Engineer</option>
                <option value="Penetration Tester (Ethical Hacker)">
                  Penetration Tester (Ethical Hacker)
                </option>
                <option value="Information Security Manager">
                  Information Security Manager
                </option>
                <option value="Network Security Engineer">
                  Network Security Engineer
                </option>
                <option value="Network Engineer">Network Engineer</option>
                <option value="Systems Engineer">Systems Engineer</option>
                <option value="Embedded Systems Developer">
                  Embedded Systems Developer
                </option>
                <option value="IoT Developer">IoT Developer</option>
                <option value="Automation Tester">Automation Tester</option>
                <option value="Performance Tester">Performance Tester</option>
                <option value="Manual Tester">Manual Tester</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Product Designer">Product Designer</option>
                <option value="Product Manager">Product Manager</option>
                <option value="Interaction Designer">Interaction Designer</option>
                <option value="Technical Lead">Technical Lead</option>
                <option value="CTO (Chief Technology Officer)">
                  CTO (Chief Technology Officer)
                </option>
                <option value="Team Lead">Team Lead</option>
                <option value="Blockchain Developer">Blockchain Developer</option>
                <option value="Smart Contract Developer">
                  Smart Contract Developer
                </option>
                <option value="AR/VR Developer">AR/VR Developer</option>
                <option value="Quantum Computing Developer">
                  Quantum Computing Developer
                </option>
                <option value="Database Administrator">
                  Database Administrator
                </option>
                <option value="Data Architect">Data Architect</option>
                <option value="ETL Developer">ETL Developer</option>
                <option value="Technical Writer">Technical Writer</option>
                <option value="Documentation Specialist">
                  Documentation Specialist
                </option>
                <option value="Business Analyst">Business Analyst</option>
                <option value="Integration Specialist">
                  Integration Specialist
                </option>
                <option value="ERP Consultant (SAP, Oracle, etc.)">
                  ERP Consultant (SAP, Oracle, etc.)
                </option>
              </select>
          </div>
        <div className="form-group">
            <select id="experience" className="hero-select">
              <option value="">Select experience</option>
              <option value="1+">1+ years</option>
              <option value="3+">3+ years</option>
              <option value="5+">5+ years</option>
              <option value="10+">10+ years</option>
              <option value="15+">15+ years</option>
            </select>
          </div>
          <div className="form-group">
          <select name="skills" className="hero-select">
            <option value="">Select any skills</option>
            <option value="JavaScript">JavaScript</option>
            <option value="TypeScript">TypeScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
            <option value="C#">C#</option>
            <option value="Ruby">Ruby</option>
            <option value="Go">Go</option>
            <option value="Swift">Swift</option>
            <option value="Kotlin">Kotlin</option>
            <option value="PHP">PHP</option>
            <option value="Rust">Rust</option>
            <option value="Scala">Scala</option>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue.js">Vue.js</option>
            <option value="Next.js">Next.js</option>
            <option value="Express.js">Express.js</option>
            <option value="Django">Django</option>
            <option value="Flask">Flask</option>
            <option value="Spring Boot">Spring Boot</option>
            <option value="Ruby on Rails">Ruby on Rails</option>
            <option value="ASP.NET">ASP.NET</option>
            <option value="TensorFlow">TensorFlow</option>
            <option value="PyTorch">PyTorch</option>
            <option value="MongoDB">MongoDB</option>
            <option value="MySQL">MySQL</option>
            <option value="PostgreSQL">PostgreSQL</option>
            <option value="SQLite">SQLite</option>
            <option value="Firebase">Firebase</option>
            <option value="OracleDB">OracleDB</option>
            <option value="Redis">Redis</option>
            <option value="Cassandra">Cassandra</option>
            <option value="AWS">AWS</option>
            <option value="Azure">Azure</option>
            <option value="Google Cloud">Google Cloud</option>
            <option value="Docker">Docker</option>
            <option value="Kubernetes">Kubernetes</option>
            <option value="CI/CD">CI/CD</option>
            <option value="Jenkins">Jenkins</option>
            <option value="Ansible">Ansible</option>
            <option value="Terraform">Terraform</option>
            <option value="Git">Git</option>
            <option value="GitHub">GitHub</option>
            <option value="GitLab">GitLab</option>
            <option value="JIRA">JIRA</option>
            <option value="Postman">Postman</option>
            <option value="Figma">Figma</option>
            <option value="Visual Studio Code">Visual Studio Code</option>
            <option value="Selenium">Selenium</option>
            <option value="Cypress">Cypress</option>
            <option value="Jest">Jest</option>
            <option value="Mocha">Mocha</option>
            <option value="Chai">Chai</option>
            <option value="JUnit">JUnit</option>
            <option value="Data Analysis">Data Analysis</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Deep Learning">Deep Learning</option>
            <option value="Natural Language Processing">Natural Language Processing</option>
            <option value="Big Data">Big Data</option>
            <option value="Hadoop">Hadoop</option>
            <option value="Spark">Spark</option>
          </select>
        </div>
          <div className="form-group">
<button className="search-btn">Search</button>
          </div>
    </div>
        </div>
<div className="poster">
    <div className="poster-content">
        <h2 className="font-weight-bold">
        Feeling anxious about job interviews?
        </h2>
        <p>Build your confidence with mock sessions led by our industry experts!</p>
        <a href="#"><button className="poster-btn">Check details</button></a>
    </div>
    <img src="/images/mock-interview-.png" alt="" className="poster-img"/>
</div>
      </div>
      {/* <div className="row">
        <div className="col-12 col-md-6">
        <h1 className="hero-heading">Discover the career you've always dreamed of.</h1>

        </div>
        <div className="col-12 col-md-6">
          <img src="/images/pic-hero.png" className="hero-img" alt="" />
        </div>
      </div> */}
    </div>
    <About/>
    <CompanyAbout/>
    <Features/>
    <FAQ/>
    </>
  );
}
