import styles from './Post.module.css'

function Post (props){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/felpzk.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Felipe Silva</strong>
                        <span>Front-End</span>
                    </div>
                </div>
                <time title='11 de maio as 8:13' dateTime='2022-05-11 08:13:32'>Publicado ha 1hr</time>
            </header>

            <div className={styles.content}>
                <p>Fala Galera</p>
                <p>Acabei de subir mais um projeto no meu portifolio</p>
                <p> <a href="#"> jane.design/doctorcare </a> </p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocktseat </a>
                    </p>
            </div>
        </article>
    )
}

export default Post