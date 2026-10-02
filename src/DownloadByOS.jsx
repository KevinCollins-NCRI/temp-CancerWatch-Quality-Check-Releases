export default function DownloadByOS({name = "", symbolName = "", minVersion = "", downloadLink = ""}) {
    const containerClassName = downloadLink ? "download-by-os-item download-button" : "download-by-os-item";
    const downloadFromSelectedLink = () => {
        if (!downloadLink) return;
        window.open(downloadLink);
    }
    return (<>
    <div className={containerClassName} onClick={downloadFromSelectedLink}>
        {symbolName ? 
            (<svg width="80">
                <use href={`${import.meta.env.BASE_URL}icons.svg#${symbolName}`}></use>
            </svg>):
            (<p></p>)
        }
        <h3>{name}</h3>
        <p>{minVersion} or higher</p>
        <div>
            {
                downloadLink ?
                (<p>Click to download</p>) :
                (<span>No downloads available yet</span>)
            }
        </div>
    </div>
    </>)
}