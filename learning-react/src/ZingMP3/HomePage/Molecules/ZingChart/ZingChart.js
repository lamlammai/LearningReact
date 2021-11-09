import React from "react";
import Chart from "../../Atoms/Chart/Chart";
import ZingItem from "../../Atoms/ZingItem/ZingItem";
import "./ZingChart.css";
function ZingChart(){
    const song = [
            {
                id:1,
                song: "Chưa bao h em quên",
                singer: "HƯơng ly",
                img:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg",
                percent:'37%'
            },
            {
                id:2,
                song: "Chưa bao h em quên",
                singer: "HƯơng ly",
                img:"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/e/3/2/5e3201af8c02c4f43d2db15707183832.jpg",
                percent:'37%'
            },
            {
                id:3,
                song: "Chưa bao h em quên",
                singer: "HƯơng ly",
                img:"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/e/3/2/5e3201af8c02c4f43d2db15707183832.jpg"
            }
        ]
    return(
        <>
            <div className="ZingChart">
                <div className="ZingChartMain">
                    <ul className="ListZing">
                    {song.map(item => (
                        <ZingItem song={item}/>
                    ))} 
                    <div className="BtnMore"><button className="More">Xem thêm</button></div>
                    </ul>
                    
                    
                    <div className="Chart">
                        <Chart/>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default ZingChart;