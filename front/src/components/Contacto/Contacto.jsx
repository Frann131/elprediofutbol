import styles from './Contacto.module.css';

export const Contacto = () => {
    return (
        <section className={styles.contacto}>
            <div className={styles.contactoright}>
                <h1 className={styles.contactotitle}>Contáctanos</h1>
                <form action="" className={styles.contactoform}>
                    <div className={styles.contactoinputline}>
                        <label for="name" className={styles.contactolabel}>Nombre</label>
                        <input type="text" name="name" id="name" className={styles.contactinput} />
                    </div>

                    <div className={styles.contactoinputline}>
                        <label for="lastname" className={styles.contactolabel}>Apellido</label>
                        <input type="text" name="lastname" id="lastname" className={styles.contactinput} />
                    </div>

                    <div className={styles.contactoinputline}>
                        <label for="email" className={styles.contactolabel}>Email</label>
                        <input type="email" name="email" id="email" className={styles.contactinput} />
                    </div>

                    <div className={styles.contactoinputline}>
                        <label for="subject" className={styles.contactolabel}>Asunto</label>
                        <input type="text" name="subject" id="subject" className={styles.contactinput} />
                    </div>

                    <div className={styles.contactoinputline}>
                        <label for="mensaje" className={styles.contactolabel}>Mensaje</label>
                        <textarea name="mensaje" id="mensaje" className={styles.contactinput}></textarea>
                    </div>
                    <input type="submit" value="Enviar" className={styles.contactobtn} />
                </form>
            </div>
        </section>
    )
}