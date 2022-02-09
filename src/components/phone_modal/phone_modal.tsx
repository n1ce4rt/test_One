import style from './phone_modal.module.css'
import React, {useState} from "react";
import InputMask from 'react-input-mask';
import qrcode from '../../img/054c4d12c8284b9538de2bc5858a7e1f.png'



type propsType = {
    changeModal: (successful: boolean) => void
}

export const PhoneModal = ({changeModal}: propsType) => {

    const [error, setError] = useState<boolean>(false)
    const [phone, setPhone] = useState<string>('+7')
    const [check, setCheck] = useState<boolean>(true)

    const onPhoneClick = () => (event: React.MouseEvent<HTMLButtonElement> ) => {
        setPhone(phone + event.currentTarget.innerText);
    };

    return (
        <section className={style.phone_wrapper}>

            <div className={style.phone_container}>
                <p className={style.phone_title}>Введите ваш номер мобильного телефона</p>
                <InputMask className={style.phone_input}
                           style={{color: `${error? 'red': 'black'}`}}
                           mask="+7 (999) 999-99-99" value={phone}
                           onChange={(e) => setPhone(e.currentTarget.value)}
                />
                <p className={style.phone_note}>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
                <div className={style.btn_wrapper}>

                    <button className={style.btn} onClick={onPhoneClick()} disabled={phone.length >= 12}>1</button>
                    <button className={style.btn} onClick={onPhoneClick()} disabled={phone.length >= 12}>2</button>

                    <button className={style.btn} onClick={onPhoneClick()} disabled={phone.length >= 12}>3</button>
                    <button className={style.btn} onClick={onPhoneClick()} disabled={phone.length >= 12}>4</button>
                    <button className={style.btn} onClick={() => {
                        setError(true)
                        onPhoneClick()
                    }} disabled={phone.length >= 12}>5</button>
                    <button className={style.btn} onClick={onPhoneClick()} disabled={phone.length >= 12}>6</button>
                    <button className={style.btn} onClick={onPhoneClick()} disabled={phone.length >= 12}>7</button>
                    <button className={style.btn} onClick={onPhoneClick()} disabled={phone.length >= 12}>8</button>
                    <button className={style.btn} onClick={onPhoneClick()} disabled={phone.length >= 12}>9</button>
                    <button className={style.btn_del} disabled={phone.length <= 2} onClick={() => setPhone(phone.slice(0, -1))}>Стереть</button>
                    <button className={style.btn} onClick={onPhoneClick()} disabled={phone.length >= 12}>0</button>
                </div>
                {
                    error?
                        <h2 className={style.error}>Неверно введён номер</h2>:

                    <div className={style.checkbox_wrapper}>
                        <input className={style.check} type={'checkbox'} onChange={() => setCheck(!check)}/>
                        <label>Согласие на обработку персональных данных</label>
                    </div>
                }
                <button className={phone.length === 12 && !check? `${style.btn_suc} ${style.btn_submit}`:style.btn_submit } type={'submit'} onClick={() => {
                    changeModal(true)
                    console.log(phone)
                } }
                        disabled={phone.length < 12 || check || phone.length > 12}

                >Подтвердить номер
                </button>
            </div>
            <div className={style.poster_container}>
                <button className={style.btn_close} type={'button'}></button>
                <div className={style.poster_note}>
                    <p>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
                    <img className={style.qr} src={qrcode} alt={'QR code'}/>
                </div>
            </div>
        </section>
    )
}