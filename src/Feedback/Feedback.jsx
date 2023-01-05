const tele = window.Telegram.WebApp;

function Feedback(){


    tele.MainButton.text = "Отправить заказ";
    tele.MainButton.show();
    tele.MainButton.onClick(() => tele.close());
    return(
        <>
            <div>form</div>
        </>
    )
}

export default Feedback