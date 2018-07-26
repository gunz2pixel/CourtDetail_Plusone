import React from "react";

export default (props) => {
    return (
        <ul className="list-group shadow">
            <li className="list-group-item">กรุงเทพ</li>
            <li className="list-group-item">
                <ul>
                    {["เขตหลักสี่", "เขตพญาไท","เขตบางเขน"].map((court, index) => {
                        return (
                            <li key={index}>
                                {court}
                                <ul>
                                    {
                                        Array.from({ length: 4 }, (v, k) => k).map((c, i) => {
                                            return <li key={i}>สนาม {(i + 1)}</li>
                                        })
                                    }
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </li>
            <li className="list-group-item">นนทบุรี</li>
            <li className="list-group-item">
                <ul>
                    {["บางกรวย", "บางบัวทอง", "ไทรน้อย"].map((court, index) => {
                        return (
                            <li key={index}>
                                {court}
                                <ul>
                                    {
                                        Array.from({ length: 4 }, (v, k) => k).map((c, i) => {
                                            return <li key={i}>สนาม {(i + 1)}</li>
                                        })
                                    }
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </li>

            <li className="list-group-item">ปทุมธานี</li>
            <li className="list-group-item">
                <ul>
                    {["รังสิต", "ลำลูกกา"].map((court, index) => {
                        return (
                            <li key={index}>
                                {court}
                                <ul>
                                    {
                                        Array.from({ length: 4 }, (v, k) => k).map((c, i) => {
                                            return <li key={i}>สนาม {(i + 1)}</li>
                                        })
                                    }
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </li>
        </ul>
    )
}