import style from './successful_modal.module.css'
import qrcode from "../../img/054c4d12c8284b9538de2bc5858a7e1f.png";


type propsType = {
    change: (e: boolean) => void
}

export const SuccessfulModal = ({change}: propsType) => {



    return  (
        <section className={style.successful_wrapper}>
            <div className={style.successful}>
                <h1>ЗАЯВКА<br/> ПРИНЯТА</h1>
                <p>Держите телефон под рукой.<br/> Скоро с Вами свяжется наш менеджер. </p>
            </div>
            <div className={style.poster_container}>
                <button className={style.btn_close} type={'button'} onClick={() => change(false)}></button>
                <div className={style.poster_note}>
                    <p>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
                    <img className={style.qr} src={qrcode} alt={'QR code'}/>
                </div>
            </div>
        </section>
    )
}