import Nav from '../../components/nav'
import styles from '../../styles/Home.module.css'
import { Category, ChartComponent, ColumnSeries, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';



export default function Contactos () {

    const data = [
        { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
        { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
        { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
        { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
        { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
        { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
    ];

    const primaryxAxis = { valueType: 'Category' };

    return(
        <>
        <Nav></Nav>
        <h1>VENTA</h1>
        <ChartComponent id="charts" primaryXAxis={primaryxAxis}>
            <Inject services={[ColumnSeries, Tooltip, LineSeries, Category]}/>
            <SeriesCollectionDirective>
            <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales'/>
            </SeriesCollectionDirective>
        </ChartComponent>;
        </>
    )
}