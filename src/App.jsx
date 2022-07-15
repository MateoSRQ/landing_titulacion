import {useState} from 'react'
import styles from './app.module.css'
import {Row, Col} from 'antd'
import 'antd/dist/antd.css'
import {Button, Form, Input, Radio} from 'antd';
import "@fontsource/bebas-neue"

function App() {
    const [count, setCount] = useState(0)
    const [form] = Form.useForm();

    const handleFinish = (e) => {
        alert('Correo enviado con datos: ' + JSON.stringify(e))
        console.log(e)
    }


    return (
        <div className={styles.component}>
            <div className={styles.banner}>
                <img src="./assets/images/A.png"/>
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
                        <Form.Item >
                            <Button  htmlType="submit" size='large' block type="primary">ENVIAR</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <div className={styles.slip}>
                <img src="./assets/images/B.png"/>
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
