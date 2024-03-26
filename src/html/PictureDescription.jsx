import React from "react"
import { Html } from "@react-three/drei"

import buttonStyles from "./styles/Button.module.css"

const PictureDescription = ({ val, shown, backFn, nextPic, prevPic, ...props }) => {

    const ref = React.useRef()

    React.useEffect(() => {
        if (ref.current) {
            if (shown) {
                ref.current.scale.set(0.025, 0.025, 0.25)
            } else {
                setTimeout(() => {
                    ref.current.scale.set(0, 0, 0)
                }, 200)
            }
        }
    }, [shown])

    return (
        <group 
            ref={ref}
            scale={[0,0,0]}
            rotation={[0, Math.PI/2, 0]}
            {...props}
            >
            <Html
                transform occlude
                style={{
                    backgroundColor: 'white',
                    opacity: shown ? 0.95 : 0,
                    transition: 'all .2s',
                    width: '1280px',
                    height: '920px',
                    borderRadius: '16px'
                }}>
                <div style={{
                    padding: '32px',
                    fontSize: '24pt'
                }}>
                    <h1 style={{margin: 0, fontSize: '1.5em'}}>{val.name}</h1>
                    {val.isHeadLab && <p style={{marginTop: 0}}>Kepala Laboratorium</p>}
                    <p style={{margin: 0}}>NIDN : {val.nidn}</p>
                    <p style={{margin: 0}}>Email : {val.email}</p>
                    <p style={{margin: 0}}>Pendidikan Terakhir : {val.last_education}</p>
                    <p style={{marginBottom: 0}}>Jabatan Terakhir </p>
                    <ul>
                        {val.last_position.length > 0 ?
                            val.last_position.map((position, index) => (
                                <li key={index}>{position}</li>
                            ))
                            : '-'
                        }
                    </ul>
                    <table style={{width: '100%', border: '1px solid black'}}>
                        <thead>
                            <tr>
                                <th colSpan={3} style={{padding: 16}}>
                                    Publikasi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td align="center" style={{padding: 16}}>
                                    <a href={`https://www.scopus.com/authid/detail.uri?authorId=${val.scopusId}`} target="_blank" rel='noreferrer'>Scopus</a>
                                </td>
                                <td align="center" style={{padding: 16}}>
                                    <a href={`https://scholar.google.co.id/citations?user=${val.scholarId}&hl=id`} target="_blank" rel='noreferrer'>Google Scholar</a>
                                </td>
                                <td align="center" style={{padding: 16}}>
                                    <a href={`https://sinta.kemdikbud.go.id/authors/profile/${val.sintaId}`} target="_blank" rel='noreferrer'>Sinta</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 32,
                            display: 'flex',
                            justifyContent: 'space-between',
                            left: 32,
                            right: 32
                        }}
                    >
                        <button
                            onClick={prevPic}
                            className={buttonStyles.black_button}
                        >prev</button>
                        <button
                            onClick={nextPic}
                            className={buttonStyles.black_button}
                        >next</button>
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            right: 32,
                            top: 32,
                        }}
                    >
                        <button
                            onClick={backFn}
                            className={buttonStyles.black_button}
                        >
                            back
                        </button>
                    </div>
                </div>
            </Html>
        </group>
    )
}

export default PictureDescription