import styles from './index.module.scss';

const Banner = (props: APIComBanner.Props) => {

    const picture = props.url ?
        props.url :
        process.env.DEFAULT_PICTURE;

    return (
        picture &&
        <div className={styles.container}>
            <img src={picture} alt={props.name}/>
        </div>
    )
}

export default Banner;