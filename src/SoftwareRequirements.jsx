import OsSelectionTab from "./OsSelectionTab";
import SoftwareRequirementsLinux from "./SoftwareRequirementsLinux";
import SoftwareRequirementsMac from "./SoftwareRequirementsMac";
import SoftwareRequirementsWindows from "./SoftwareRequirementsWindows"

export default function SoftwareRequirements({selectedSoftwareIndex, setSelectedSoftwareIndex}) {
    const tabButtons = () => {
        switch(selectedSoftwareIndex) {
            case 0: return (<div id="software-tab-selection">
                              <OsSelectionTab osName="Windows" isSelected={true} onClickMethod={() => {clickTab(0)}}/>
                              <OsSelectionTab osName="Mac" isSelected={false} onClickMethod={() => {clickTab(1)}}/>
                              <OsSelectionTab osName="Linux" isSelected={false} onClickMethod={() => {clickTab(2)}}/>
                            </div>)
            case 1: return (<div id="software-tab-selection">
                              <OsSelectionTab osName="Windows" isSelected={false} onClickMethod={() => {clickTab(0)}}/>
                              <OsSelectionTab osName="Mac" isSelected={1} onClickMethod={() => {clickTab(1)}}/>
                              <OsSelectionTab osName="Linux" isSelected={false} onClickMethod={() => {clickTab(2)}}/>
                            </div>)
            case 2: return (<div id="software-tab-selection">
                              <OsSelectionTab osName="Windows" isSelected={false} onClickMethod={() => {clickTab(0)}}/>
                              <OsSelectionTab osName="Mac" isSelected={false} onClickMethod={() => {clickTab(1)}}/>
                              <OsSelectionTab osName="Linux" isSelected={true} onClickMethod={() => {clickTab(2)}}/>
                            </div>)
        }
    }
    const displayedComponent = () => {
        switch(selectedSoftwareIndex) {
            case 0: return <SoftwareRequirementsWindows/>;
            case 1: return <SoftwareRequirementsMac/>;
            case 2: return <SoftwareRequirementsLinux/>
            default: return <div><p>ERROR - NO MATCHING OPERATING SYSTEM FOR THIS INDEX</p></div>
        }
    } 

    const clickTab = (tabIndex = 0) => {
        if (![0,1,2].includes(tabIndex)) tabIndex = 0;
        setSelectedSoftwareIndex(tabIndex);
    }

    return (<>
      { tabButtons() }
      { displayedComponent() }

    </>)
}