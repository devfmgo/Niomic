import NumberFormat from 'react-number-format'
const {sum} = require ("../../util/library")
const CardStatus = (props)=>{
    return (
        <div className="row mt-3 ml-1 mb-2">
            {/* card positif  */}
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card bg-danger img-card box-primary-shadow border">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="text-white">
                                <p className="text-white mb-0">
                                    Total Positif
                                </p>
                                <h2 className="mb-0 number-font">
                                    <NumberFormat value={sum('Confirmed',props)} displayType={'text'} thousandSeparator={","} decimalSeparator={"."} defaultValue={0}/>
                                </h2>
                                <p className="text-white mb-0">
                                    Orang
                                </p>
                            </div>
                            <div className="ml-auto">
                                <img src="images/positif.png" width="50" height="50" alt="Positif"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* card sembuh  */}
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card bg-success img-card box-primary-shadow border">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="text-white">
                                <p className="text-white mb-0">
                                    Total Sembuh
                                </p>
                                <h2 className="mb-0 number-font">
                                <NumberFormat value={sum('Recovered',props)} displayType={'text'} thousandSeparator={","} decimalSeparator={"."} defaultValue={0}/>
                                </h2>
                                <p className="text-white mb-0">
                                    Orang
                                </p>
                            </div>
                            <div className="ml-auto">
                                <img src="images/sembuh.png" width="50" height="50" alt="Sembuh"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* card meninggal  */}
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card bg-secondary img-card box-primary-shadow border">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="text-white">
                                <p className="text-white mb-0">
                                    Total Meninggal
                                </p>
                                <h2 className="mb-0 number-font">
                                <NumberFormat value={sum('Deaths',props)} displayType={'text'} thousandSeparator={","} decimalSeparator={"."} />
                                </h2>
                                <p className="text-white mb-0">
                                    Orang
                                </p>
                            </div>
                            <div className="ml-auto">
                                <img src="images/meninggal.png" width="50" height="50" alt="Meninggal"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* card aktif  */}
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card bg-info img-card box-primary-shadow border">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="text-white">
                                <p className="text-white mb-0">
                                    Total Aktif
                                </p>
                                <h2 className="mb-0 number-font">
                                <NumberFormat value={sum('Active',props)} displayType={'text'} thousandSeparator={","} decimalSeparator={"."} />
                                </h2>
                                <p className="text-white mb-0">
                                    Orang
                                </p>
                            </div>
                            <div className="ml-auto">
                                <img src="images/active1.png" width="50" height="50" alt="Active1"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardStatus;