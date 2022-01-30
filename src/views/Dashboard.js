import React from "react";

import gambar from "../images/avatars/pict.png";
import {
    Container,
    Row,
    Col,
    Card,

    Button
} from "shards-react";


const Dashboard = () => (
    <Card className="m-0">
        <br></br>
        <br></br>
        <Col lg="12" sm="12" className="mb-1">
            <Card className="card-post card-post--aside card-post--1">
                <div className="ml-4"
                >
                    <img src={gambar} alt="" srcSet=""/>
                </div>
                <div className="col lg-6 text-center pt-5">
                    <h1 className="pt-5">
                        Tallents Mapping
                    </h1>
                    <h4 className="pt-2">Temukan bakat yang menjadi kekuatan anda disini</h4>
                    <Button theme="danger">Mulai Test</Button>
                </div>
            </Card>
            <Card>

            </Card>
        </Col>
        <div className="row">
            <Card className="col lg-6 ml-4 mr-1 mb-4 pb-4 ">
                <div className=" col lg-6 p-5">
                    <h3 className="pt-0 text-center ">
                        Tallents Mapping
                    </h3>
                    <h6 className="p-0 text-justify">
                        Tallents Mapping secara umum metode ini berupa asesmen yang dapat membantu sesorang agar dapat memahami potensi yang dimilikinya. Tallents Mapping merupakan turunan dari ilmu Psikologi positif  yang dikembangkan oleh Gallup Organization  USA. Yang melibatkan 1.7 juta responden penulisan tersebut mendapatkan data-data terkait tema bakat. Setelah itu data-data tersebut dikelompokkan menjadi 34 tema bakat oleh Donald Clifton. Di indonesia Ir. Rama Royani atau yang dikenal Abah Rama, mempunyai insiatif untuk menterjemahkan teori dan penulisan tersebut dengan membuat sistem untuk mengtahui Tallents Mapping, yang sekarang digunakan diberbagai hal didunia kerja.
                    </h6>
                    
                </div>
            </Card>
            <Card className="col lg-6 mr-4 ml-1 mb-4">
            <div className=" col lg-6 p-5">
                    <h3 className="pt-0 text-center ">
                        Tallents Mapping
                    </h3>
                    <h6 className="p-0 text-justify">
                        Tallents Mapping secara umum metode ini berupa asesmen yang dapat membantu sesorang agar dapat memahami potensi yang dimilikinya. Tallents Mapping merupakan turunan dari ilmu Psikologi positif  yang dikembangkan oleh Gallup Organization  USA. Yang melibatkan 1.7 juta responden penulisan tersebut mendapatkan data-data terkait tema bakat. Setelah itu data-data tersebut dikelompokkan menjadi 34 tema bakat oleh Donald Clifton. Di indonesia Ir. Rama Royani atau yang dikenal Abah Rama, mempunyai insiatif untuk menterjemahkan teori dan penulisan tersebut dengan membuat sistem untuk mengtahui Tallents Mapping, yang sekarang digunakan diberbagai hal didunia kerja.
                    </h6>
                    
                </div>
            </Card>

        </div>
    </Card>
);

export default Dashboard;
