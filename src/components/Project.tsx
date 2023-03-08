import { type Project as ProjectType } from '../types'

type Props = ProjectType

export const Project: React.FC<Props> = ({ id, title, description, stack }) => {
  return (
            <div>
                <label>{title}</label>
                <p>{description}</p>
                <ul>
                    {stack.map((tecnology, i) =>
                    <li key={i}>
                        {tecnology}
                    </li>)}
                </ul>
            </div>
  )
}
