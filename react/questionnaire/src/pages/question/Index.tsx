import './index.scss'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuestions } from '../../store/modules/questionnaire'
import type { Ques } from '../../store/index.ts'


export default function Index() {
    const [ques, setQues] = useState<Ques[]>([])
    const [num, setNum] = useState(1)
    const dispatch = useDispatch()

    const getData = async () => {
        const response = await fetch('https://mock.mengxuegu.com/mock/6767738f98077b17fe6792e2/question-naire')
        const data = await response.json()
        console.log(data)
        dispatch(setQuestions(data.questions)) // 存仓库给结果页面使用
        setQues(data.questions)
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div className="question-container">
            <div className="question-container-hd">
                <div className="question-container-hd-title">第 {num}/{ques.length} 题</div>
                <div className="question-container-hd-progress">
                    <div className="question-container-hd-progress-bar" style={{ width: `${num / ques.length * 100}%` }}></div>
                </div>
            </div>
            <div className="question-container-bd">
                <div className="question-container-bd-option">
                    <div className="question-container-bd-option-card">
                        <div className="order">Q{num}</div>
                        <div className="title">{ques[num - 1].topic_name}</div>
                        <ul className="list">
                            <li>
                                <input type="radio" name='item' id='item1' />
                                <label htmlFor="item1">社交媒体（微信、微博等）</label>
                            </li>
                            <li>
                                <input type="radio" name='item' id='item2' />
                                <label htmlFor="item2">社交媒体（微信、微博等）</label>
                            </li>
                            <li>
                                <input type="radio" name='item' id='item3' />
                                <label htmlFor="item3">社交媒体（微信、微博等）</label>
                            </li>
                            <li>
                                <input type="radio" name='item' id='item4' />
                                <label htmlFor="item4">社交媒体（微信、微博等）</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="question-container-ft">
                <div className="btn">下一题</div>
            </div>
        </div>
    )
}
