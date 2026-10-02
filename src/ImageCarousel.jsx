import homeImg from './assets/home-page-preview.png';
import gettingStartedImg from './assets/getting-started-page-preview.png';
import navbarImg from './assets/navbar-expanded-preview.png';
import validImg from './assets/validation-preview.png';
import resSummaryImg from './assets/results-summary-page-preview.png';
import resDetailImg from './assets/results-detail-page-preview.png';
import kpiDashboardImg from './assets/kpi-page-preview.png';
import kpiDrilldownImg from './assets/kpi-drilldown-preview.png';

const images = [
    {"imageSrc":homeImg,"altTxt":"Preview of application landing page","captionTxt":"Home page with access to all the main pages in the application"},
    {"imageSrc":navbarImg,"altTxt":"Application landing page with sidebar navigation expanded","captionTxt":"An additional navigation sidebar is available from all pages to navigate anywhere in the application"},
    {"imageSrc":gettingStartedImg,"altTxt":"Preview of application instructions for getting started","captionTxt":"The application includes a Getting Started guide for users who need help understanding the quality validations which should be enforced before submitting data to ECIS"},
    {"imageSrc":validImg,"altTxt":"Preview of data validation page during processing of an incidence submission","captionTxt":"Files up to 3GB in size can be validated, with all current ECIS protocols supported"},
    {"imageSrc":resSummaryImg,"altTxt":"Preview of results summary page, in which users can view a high-level summary of validation messages generated for their file", "captionTxt": "A results summary gives users a high-level picture of the validation messages generated for their file"},
    {"imageSrc":resDetailImg,"altTxt":"Preview of results detail page, in which users can examine the validation messages pertaining to each line from their input data", "captionTxt": "From the results detail page, users can drill down on the detail of the validations – which lines from the file triggered which messages, what fields were involved and how to rectify"},
    {"imageSrc":kpiDashboardImg,"altTxt":"Preview of KPI dashboard page displaying high-level data quality indicators based on the latest file validation", "captionTxt": "The results of the validation are factored in to generate an overall quality score, with guidance on the key facets of the data which need improvement"},
    {"imageSrc":kpiDrilldownImg,"altTxt":"Sidebar on KPI dashboard giving extra information on the calculation of the selected data quality indicator", "captionTxt": "Drilldown detail is available on each KPI to help users understand how the value was derived and the target that must be met before moving into a higher quality tier"}
]

export default function ImageCarousel({currentImageIndex, setCurrentImageIndex}) {
    const alterCurrentImageIndex = (isIncrement = false) => {
        let newImageIndex = currentImageIndex + (isIncrement ? 1:-1);
        if (newImageIndex == -1) {
            newImageIndex = images.length - 1;
        }
        if (newImageIndex == images.length) {
            newImageIndex = 0;
        }
        setCurrentImageIndex(newImageIndex);
    }

    return (
        <>
            <div id='image-carousel' aria-label="Image carousel with controls to enable cycling through various preview images of the application">
                <div className='carousel-button' onClick={() => {alterCurrentImageIndex(false)}} aria-label='Button to navigate back to previous image in carousel'>
                    <svg width="50" aria-hidden='true'>
                        <use href={`${import.meta.env.BASE_URL}icons.svg#left-chevron-icon`}></use>
                    </svg>
                </div>
                <div className='carousel-image-container'>
                    <img src={images[currentImageIndex].imageSrc}  alt={images[currentImageIndex].altTxt} />
                    <div className='image-caption'>
                        <p>{images[currentImageIndex].captionTxt}</p>
                    </div>
                </div>
                <div className='carousel-button' onClick={() => {alterCurrentImageIndex(true)}} aria-label='Button to navigate back to previous image in carousel'>
                    <svg width="50" aria-hidden='true'>
                        <use href={`${import.meta.env.BASE_URL}icons.svg#right-chevron-icon`}></use>
                    </svg>
                </div>
            </div>
            
        </>
    )
}