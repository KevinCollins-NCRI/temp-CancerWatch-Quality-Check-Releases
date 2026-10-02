export default function OsSelectionTab({isSelected,osName,onClickMethod}) {
    return (<>
    {
    isSelected ? 
    (<button className="selected-tab" role="button" onClick={onClickMethod}><h3>{osName}</h3></button>):
    (<button role="button" onClick={onClickMethod}><h3>{osName}</h3></button>)
    }</>)
}