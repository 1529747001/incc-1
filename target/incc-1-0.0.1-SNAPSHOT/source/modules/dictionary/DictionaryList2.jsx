import React from 'react';
import {Icon, Table, Modal, Row, Col} from 'antd';
import {refreshDictionaryList, changeDictionaryStatus, delDictionary} from 'actions/DictionaryActions';
import {showModalDialog} from 'actions/CommonAction';
import DelConfirm from '../common/DelConfirm';

const confirm = Modal.confirm;
/**
 * Dictionary: zyj
 * Date: 16/7/19.
 * Time: 上午10:26.
 */
export default class DictionaryList2 extends React.Component {
    constructor(props) {
        super(props);
    }

    view(id){
        this.props.onView(id);
    }

    edit(id){
        this.props.onEdit(id);
    }

    delete(id, dictionaryCriteria, pageNum){
        this.props.dispatch(delDictionary(id, dictionaryCriteria));
        // this.props.onDelete(id);
    }

    render() {

        const columns = [
            {title: '产品编号', dataIndex: '', key: 'num', render: (text, record, index) => (

                <span>
                    {index + 1}
                </span>

            )},
            {title: '名称', dataIndex: 'type', key: 'type', render: (text, record, index) => (<span>{ text == "INDUSTRY"? "行业":text=="CATEGORY"?"行业类别":text=="REPORT_TYPE"?"检测报告类别":""
            }</span>)},
            {title: '描述说明', dataIndex: 'value', key: 'value'},
            {title: '价格（元）', dataIndex: 'weight', key: 'weight'},
            {title: '个数', dataIndex: 'parentId', key: 'parentId', render: (text) => (<span>{industrys.get(text)}</span>)},
            {title: '起始时间', dataIndex: 'weight', key: 'weight'},
            {title: '截止时间', dataIndex: 'weight', key: 'weight'},
            {
                title: '操作', dataIndex: '', key: 'x', render: (text, record, index) => (

                <span>
                    {/*<a onClick={()=>this.view(record.id)} style={{color:'#2db7f5',cursor:'pointer'}}> 查看</a>*/}
                    <a onClick={()=>this.edit(record.id)} style={{color:'#2db7f5',cursor:'pointer'}}> 修改</a>
                    <DelConfirm onOk = {()=>this.delete(record.id, dictionaryCriteria, dictionaryList.pageNum)}/>
                </span>

            ),
            },
        ];
        
        	 const {dictionaryList} = this.props;

        const {dictionaryCriteria} = this.props;
      

        let industrys = new Map();
        dictionaryList.forEach((item)=>{
            if(item.type == "INDUSTRY"){
                industrys.set(item.id, item.value);
            }
        })
        console.log(industrys);

        return (
            <div>
                <Table
                    columns={columns}
                    bordered
                    dataSource={dictionaryList2}
                    className="table"
                />
            </div>
        )
    }
};
