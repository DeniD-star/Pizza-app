import './index.css'
import * as pizzaService from "../../services/pizzaService";
import * as commentService from "../../services/commentService";
import { UserContext } from "../../context/UserContext";
import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";


const Comments = () => {
  const { user } = useContext(UserContext);
  const { pizzaId } = useParams();
  const [commentsList, setCommentsList] = useState([]);
  const [textComment, setTextComment] = useState("");
  const [pizza, setPizza] = useState("");

  useEffect(() => {
    commentService.getCommentByPizzaId(pizzaId).then((res) => {
      if (res.length > 0) {
        setCommentsList(res);
      }
    });
    pizzaService.getOne(pizzaId).then((result) => {
      if (result._id) {
        setPizza(result);
      }
    });

  }, []);


  useEffect(() => {
    (async () => {
      const pizzaDetails = await pizzaService.getOne(pizzaId);
      console.log(pizzaDetails);
      const pizzaComments = await commentService.getCommentByPizzaId(pizzaId);

      console.log(pizzaComments);
    })();
  }, []);

  const addCommentHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const comment = formData.get("comment");

    commentService
      .createComment(pizzaId, comment, user.username)
      .then((result) => {
        if (result._id) {
          setCommentsList((currentComments) => [...currentComments, result]);
          setTextComment("");
        }
      });
  };

  return  <>

  {pizza.canBeEdit && (
    <article className="about-comments">
      <article className="comments">
        <h3 className="heading-comments">Comments:</h3>
        <ul className="list-comments">
          {commentsList.length > 0 &&
            commentsList.map(({ _id, text, author }) => (
              <li key={_id} className="comment-item">
                <h3 className="username-name">
                  {author}
                  <i className="fa-solid fa-check"></i>
                </h3>
                <p className="comment-content">{text}</p>
              </li>
            ))}
        </ul>
      </article>
      <article className="comments-add-mew">
        <h3 className="heading-comments">New Comment</h3>
        <form className="form" onSubmit={addCommentHandler}>
          <textarea
            name="comment"
            placeholder="Comment......"
            onChange={(e) => setTextComment(e.target.value)}
            value={textComment}
          />

          <input className="btn-add-comment" type="submit" value="Add" />
        </form>
      </article>
    </article>
  
  )}
   </>
};

export default Comments;
