import { useEffect, useState} from "react";
import { useContext } from "react";
import { useParams} from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import * as likeService from "../../services/likeService";
import * as pizzaService from "../../services/pizzaService";

const Likes= () => {
    const [likesNumber, setLikesNumber] = useState(0);
    const [canAddLike, setCanAddLike] = useState(true);
    const [likeList, setLikeList] = useState([]);
    const [pizza, setPizza] = useState("");
    const { user } = useContext(UserContext);
    const { pizzaId } = useParams();


    useEffect(() => {
        likeService.getLikesByPizzaId(pizzaId).then((res) => {
          if (res.length > 0) {
            setLikeList(res);
            let likes = 0;
            console.log(1)
            res.forEach((item) => {
              if (item.pizzaId == pizzaId) {
                //se id del like e == pizzaId
                likes++;
              }
            
              if (item._ownerId == user._id) {
                //se id dell"owner._id == usera
                console.log(2)
                setCanAddLike(false);
              }
            });
            setLikesNumber(likes); //salviamo numero totale dei like del post
          }
        });
        pizzaService.getOne(pizzaId).then((result) => {
            if (result._id) {
              setPizza(result);
            }
          });
        }, []);
      
        const isOwner = pizza._ownerId === user._id;

        const likePizza = () => {
            likeService.addLike(pizzaId, user.username).then((res) => {
              setLikesNumber((tempt) => tempt + 1); //numerolikes
              setLikeList((list) => [...list, res]); //aggiunge i like alla lista del like
              setCanAddLike(false); //lutemte ha gia inserito il like e non lo puo fare piu
            });
          };



          const removeLike = () => {
            let likeId = ""; //
            if (likeList.length == 0) return; //se ci sonono i like
            likeList.forEach((item) => {
              if (item._ownerId == user._id && item.pizzaId == pizzaId) {
                //se rimuovo like giusto, se risponde alla pizza e utente corente
                likeId = item._id; //salvo id
              }
            });
            if (!likeId) return;
            likeService.removeLike(likeId).then((res) => {
              if (res._deletedOn) {
                setLikesNumber(likesNumber - 1);
                setCanAddLike(true);
              }
            });
          };
        

  return (
    <> 
    {!isOwner && canAddLike && (
        <button className="details-btn-edit" onClick={likePizza}>
          Like
        </button>
      )}
      {!isOwner && !canAddLike && (
        <button className="details-btn-edit" onClick={removeLike}>
          Dislike
        </button>
      )}
      <p className="likes-count">{likesNumber} likes</p>
      </>
  )
}

export default Likes;