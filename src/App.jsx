import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import ImageCarousel from './ImageCarousel'
import DownloadByOS from './DownloadByOS'
import SoftwareRequirements from './SoftwareRequirements.jsx'

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSoftwareIndex, setSelectedSoftwareIndex] = useState(0);
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="902" alt="CancerWatch logo accompanied by slogan 'Improving cancer data quality timeliness to strengthen cancer control'" />
        </div>
        <div>
          <h1>CancerWatch Quality Tool</h1>
          <p>
            A tool to improve data quality in cancer registries
          </p>
        </div>
        <div className="downloads">
          <h3>Download Now</h3>
          <div className='downloads-by-os'>
            <DownloadByOS name='Windows' minVersion='Windows 10' downloadLink='' symbolName='windows-icon' />
            <DownloadByOS name='Mac' minVersion='macOS 14' downloadLink='' symbolName='apple-icon' />
            <DownloadByOS name='Linux' minVersion='Ubuntu 22.04' downloadLink='' symbolName='linux-icon' />
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps" className="text-section bordered-section">
        <div id="docs">
          
          <h2>What is CancerWatch?</h2>
          <p>
            CancerWatch is a Joint Action supporting Europe's <a href='https://commission.europa.eu/topics/public-health/european-health-union/cancer-plan-europe_en' target='_blank'>
              Beating Cancer Plan
            </a>. 
            Its primary goal is to improve the quality and timeliness of cancer 
            registry data collected by the members of European Network of Cancer Registries. By innovating registration processes and addressing data 
            disparities, CancerWatch will make more accurate and comparable insights available through the <a href="https://ecis.jrc.ec.europa.eu/" target="_blank">
              European Cancer Information System (ECIS)
            </a> and the new <a href='https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space-regulation-ehds_en' target='_blank'>
              European Health Data Space (EHDS)
            </a>. 
            Ultimately, this initiative will enhance our understanding of cancer trends and support more effective cancer policies and research across Europe.
          </p>
          <br/>
        </div>
        
      </section>

      <section className="text-section bordered-section">
        <div id="tool-explainer">
          <h2>What is the CancerWatch Quality Tool?</h2>
          <p>
            This is a tool intended for use in population-based cancer registries that submit data to ECIS.
          </p>
          <br/>
          <p>
            It can be downloaded and run on a user's computer, without connecting to the internet, to assess cancer data. This assessment 
            involves performance indicators which can be used to feed back into a registry's overall data quality.
          </p>
          <ImageCarousel currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} />
          <h3>Application Features</h3>
          <h4>Security</h4>
          <ul>
            <li>Personal identifiable data, such as patient health records, never leave the user's computer</li>
            <li>No requirement for an internet connection</li>
          </ul>
          <h4>Design/UI</h4>
          <ul>
            <li>Light/dark mode toggle</li>
            <li>Resizeable page contents (zoom up to 200%)</li>
            <li>
              Built to
              <ul>
                <li>comply with <a href='https://www.w3.org/WAI/standards-guidelines/wcag/' target='_blank'>web content accessibility guidelines, v2.1</a></li>
                <li>support keyboard-only navigation</li>
                <li>work with modern screen reader and speech recognition software</li>
              </ul>
            </li>
          </ul>
          <h3>Hardware Requirements</h3>
          <table className='table'>
            <thead>
              <tr>
                <th></th>
                <th>Minimum</th>
                <th>Recommended</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Processor
                </td>
                <td>
                  64-bit x64, 2 cores
                </td>
                <td>
                  4 or more cores. Validation runs in parallel across every core, so more cores make large files faster.
                </td>
              </tr>
              <tr>
                <td>
                  Memory (RAM)
                </td>
                <td>
                  4 GB (estimate)
                </td>
                <td>
                  8 GB or more. The app runs three processes plus a web view, and holds up to 100k records in memory at a time. Memory use doesn't grow with file size.                
                </td>
              </tr>
              <tr>
                <td>
                  Disk space (for installation)
                </td>
                <td>
                  About 250 MB (estimate)
                </td>
                <td>
                  1 GB
                </td>
              </tr>
              <tr>
                <td>
                  Disk space (for everyday usage)
                </td>
                <td>
                  Will vary with the size of the registry data.
                </td>
                <td>
                  At least 10 GB free. The largest file the app accepts (3 GB) needs 3×3 = 9 GB free.
                </td>
              </tr>
              <tr>
                <td>
                  Display
                </td>
                <td>
                  1280×720
                </td>
                <td>
                  1920×1080
                </td>
              </tr>
              <tr>
                <td>
                  Network
                </td>
                <td>
                  None needed. Everything runs on the local machine. The app only talks to itself over localhost, so security software must allow that.
                </td>
                <td>
                  Internet access only if you use the automatic update checks.
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Software Requirements</h3>
          <div className='min-top-padding'>
              <SoftwareRequirements selectedSoftwareIndex={selectedSoftwareIndex} setSelectedSoftwareIndex={setSelectedSoftwareIndex} />
          </div>
        </div>
        
      </section>

      <div className="ticks"></div>

      <section>
      <div id="links" className='bordered-section'>
          
          <h2>Learn more</h2>
          <ul>
            <li>
              <a href='https://commission.europa.eu/topics/public-health/european-health-union/cancer-plan-europe_en' target='_blank'>
                <svg width="95" role='presentation' aria-hidden='true'>
                  <use href={`${import.meta.env.BASE_URL}icons.svg#european-commission-icon`}></use>
                </svg>
                Beating Cancer Plan
              </a>
            </li>
            <li>
              <a href="https://ecis.jrc.ec.europa.eu/" target="_blank">
                <svg width="95" role='presentation' aria-hidden='true'>
                  <use href={`${import.meta.env.BASE_URL}icons.svg#european-commission-icon`}></use>
                </svg>
                European Cancer Information Space
              </a>
            </li>
            <li>
              <a href="https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space-regulation-ehds_en" target="_blank">
                <svg width="95" role='presentation' aria-hidden='true'>
                  <use href={`${import.meta.env.BASE_URL}icons.svg#european-commission-icon`}></use>
                </svg>
                European Health Data Space
              </a>
            </li>
            <li>
              <a href="https://encr.eu" target="_blank">
                <svg width="95" role='presentation' aria-hidden='true'>
                  <use href={`${import.meta.env.BASE_URL}icons.svg#encr-icon`}></use>
                </svg>
                European Network of Cancer Registries
              </a>
            </li>
            <li>
              <a href="https://www.iarc.who.int/" target="_blank">
                <svg width="115" role='presentation' aria-hidden='true'>
                  <use href={`${import.meta.env.BASE_URL}icons.svg#who-icon`}></use>
                </svg>
                International Agency for Research on Cancer
              </a>
            </li>
          </ul>
        </div>
      </section>
      
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
