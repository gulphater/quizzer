import Card from "./Card"

export default function YearSelection() { 

    return (
        <div className='flex justify-between flex-wrap'>
            <Card title="Freshman"></Card>
            <Card title="Sophomore"></Card>
            <Card title="Junior"></Card>
            <Card title="Senior"></Card>
        </div>
    );

}