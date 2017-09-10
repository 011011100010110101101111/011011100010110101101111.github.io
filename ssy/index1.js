var vm = new Vue({
	el: '#app',
	data:{
		activeName:'second',
		filterText: '',
		activeIndex: '1',
		data2: [{
			id: 1,
			label: 'java',
			children: [{
				id: 4,
				label: 'lang',
				children: [{
					id: 9,
					label: 'String'
				}, {
					id: 10,
					label: 'Intrger'
				},{
					id:11,
					label:'Long'
				},{
					id:12,
					label:'Boolean'
				}]
			}]
		}, {
			id: 1,
			label: 'java',
			children: [{
				id: 4,
				label: 'lang',
				children: [{
					id: 9,
					label: 'String'
				}, {
					id: 10,
					label: 'Intrger'
				},{
					id:11,
					label:'Long'
				},{
					id:12,
					label:'Boolean'
				}]
			}]
		}, {
			id: 1,
			label: 'java',
			children: [{
				id: 4,
				label: 'lang',
				children: [{
					id: 9,
					label: 'String'
				}, {
					id: 10,
					label: 'Intrger'
				},{
					id:11,
					label:'Long'
				},{
					id:12,
					label:'Boolean'
				}]
			}]
		}],
		defaultProps:{
			children: 'children',
			label: 'label'
		},
		tableData5: [{
			returnType: 'char',
			name: 'charAt(int index)',
			outline: '根据下标索引获取字符串中指定位置的char值',
			desc:'返回指定索引处的 char 值。索引范围为从 0 到 length() - 1。序列的第一个 char 值位于索引 0 处，第二个位于索引 1 处，依此类推，这类似于数组索引。如果索引指定的 char 值是代理项，则返回代理项值。',
			parameter: 'int index;是整型数组下标，从0开始',
			throwE: 'IndexOutOfBoundsException 数组越界异常；当参数为负数或大于等于字符串长度时抛出该异常',
			Since: 'jdk 1.5'
		},
		{
			returnType: 'String',
			name: 'concat(String str)',
			outline: '将指定字符串连接到此字符串的结尾。',
			desc:'如果参数字符串的长度为 0，则返回此 String 对象。否则，创建一个新的 String 对象，用来表示由此 String 对象表示的字符序列和参数字符串表示的字符序列连接而成的字符序列。',
			parameter: 'String str',
			throwE: '无',
			Since: ''
		},
		{
			returnType: 'int',
			name: 'codePointAt(int index)',
			outline: '返回指定索引处的字符（Unicode 代码点）',
			desc:'索引引用 char 值（Unicode 代码单元），其范围从 0 到 length() - 1。 如果给定索引指定的 char 值属于高代理项范围，则后续索引小于此 String 的长度；如果后续索引处的 char 值属于低代理项范围，则返回该代理项对相应的增补代码点。否则，返回给定索引处的 char 值。',
			parameter: 'int index;是整型数组下标，从0开始',
			throwE: 'IndexOutOfBoundsException - 如果 index 参数为负或大于等于此字符串的长度。',
			Since: 'jdk 1.5'
		},
		{
			returnType: 'char',
			name: 'charAt(int index)',
			outline: '根据下标索引获取字符串中指定位置的char字符',
			desc:'',
			parameter: 'int index;是整型数组下标，从0开始',
			throwE: 'IndexOutOfBoundsException 数组越界异常；当参数为负数或大于等于字符串长度时抛出该异常',
			Since: 'jdk 1.5'
		},
		{
			returnType: 'char',
			name: 'charAt(int index)',
			outline: '根据下标索引获取字符串中指定位置的char字符',
			desc:'',
			parameter: 'int index;是整型数组下标，从0开始',
			throwE: 'IndexOutOfBoundsException 数组越界异常；当参数为负数或大于等于字符串长度时抛出该异常',
			Since: 'jdk 1.5'
		}],
		data: [ {
			label: 'java.lang.Object',
			children: [{
				label: 'java.lang.String',
				children: [{
					label: ''
				}]
			}]
		}]
	},
	methods:{
		handleClick:function(tab, event) {
			// console.log(tab, event);
		},
		filterNode:function(value, data) {
			if (!value) return true;
			return data.label.indexOf(value) !== -1;
		},
		handleSelect:function(key, keyPath) {
			console.log(key, keyPath);
		},
		handleNodeClick:function(data) {
	        console.log(data);
	    }
	},
	watch:{
		filterText:function(val) {
			this.$refs.tree2.filter(val);
		}
	}
});
