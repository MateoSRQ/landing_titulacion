import {useState} from 'react'
import styles from './app.module.css'
import {Row, Col} from 'antd'
import 'antd/dist/antd.css'
import {Button, Form, Input, Radio} from 'antd';
import axios from 'axios'
import "@fontsource/bebas-neue"

function App() {
    const [count, setCount] = useState(0)
    const [form] = Form.useForm();

    const handleFinish = (e) => {
        alert('Información enviada con éxito')
        console.log(e)
        /*
        axios.post('https://api.mailjet.com/v3.1/send', {
            auth: {
                username: 'deb94ba7ca2730c0e3a5f0172a8ed9f7',
                password: '98abfd00210decadec30cdc09121ea4'
            },
            data: {
                "Messages":
                    [
                        {
                            "From": {
                                "Email": "sanromanxp@gmail.com",
                                "Name": "Mateo"
                            },
                            "To": [
                                {
                                    "Email": "msanroman@uap.edu.pe",
                                    "Name": "Mateo"
                                }
                            ],
                            "Subject": "Nuevo contacto",
                            "TextPart": "Nuevo contacto!",
                            "HTMLPart": `<h3>Buenos días</h3>Un nuevo contacto con código ${e.codigo}, documento ·${e.dni}, teléfono ·${e.celular} y correo ${e.correo} ha ingresado sus datos.`,
                            "CustomID": "AppGettingStartedTest"
                        }
                    ]
            }
        })

         */
    }
//deb94ba7ca2730c0e3a5f0172a8ed9f7
//98abfd00210decadec30cdc09121ea49
    return (
        <div className={styles.component}>
            <div className={styles.banner}>
                <img src="./assets/images/A.png" style={{objectFit: 'cover', width: '100%'}}/>
                <div className={styles.formcontainer}>
                    <Form
                        layout='vertical'
                        form={form}
                        onFinish={handleFinish}
                        //onValuesChange={onFormLayoutChange}
                    >
                        <Form.Item name="codigo">
                            <Input size='large' placeholder="Codigo"/>
                        </Form.Item>
                        <Form.Item name="dni">
                            <Input size='large' placeholder="DNI"/>
                        </Form.Item>
                        <Form.Item name="celular">
                            <Input size='large' placeholder="Celular"/>
                        </Form.Item>
                        <Form.Item name="correo">
                            <Input size='large' placeholder="Correo Personal"/>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit" size='large' block type="primary">ENVIAR</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <div className={styles.slip}>
                <img src="./assets/images/B.png"/>
                <div className={styles.bContainer}></div>
            </div>
            <div className={styles.modeA}>
                <img src="./assets/images/C.png"/>
            </div>
            <div className={styles.modeB}>
                <img src="./assets/images/D.png"/>
            </div>
            <div className={styles.videos}>
                <img src="./assets/images/E.png"/>
                <div className={styles.videocontainer}>
                    <Row style={{height: '100%'}} gutter={[16, 16]}>
                        <Col span={8}>
                            <div className={styles.videoitem}></div>
                        </Col>
                        <Col span={8}>
                            <div className={styles.videoitem}></div>
                        </Col>
                        <Col span={8}>
                            <div className={styles.videoitem}></div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className={styles.nets}>
                <img src="./assets/images/nets.png"/>
            </div>
            <div className={styles.footer}>
                2022 #LaNuevaUAP
            </div>
        </div>

    )
}

export default App
