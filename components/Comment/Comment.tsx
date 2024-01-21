import { Dot } from '..';
import { ICommentProps } from './Comment.props';
import styles from './Comment.module.css';
import CommentForm from '../CommentForm/CommentForm';

interface IComment {
	postId: number
	id: number;
	name: string;
	email: string;
	body: string;
}

export const Comment = ({ className, comments, cardId, ...props }: ICommentProps): JSX.Element => {

	return (
		<div className={className} {...props}>
			{comments.map((comment: IComment) => {
				return (
					<div className={styles.container} key={comment.id}>
						<div className={styles.user}>
							<span className={styles.name}>{comment.name}</span>
							<Dot />
							<span className={styles.email}>{comment.email}</span>
						</div>
						<p className={styles.comment}>{comment.body}</p>
					</div>
				);
			})}
			<CommentForm cardId={cardId} />
		</div>
	);
};

