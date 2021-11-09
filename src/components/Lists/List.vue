<template>
    <div>
        <table>
            <thead>
                <tr>
                    <td>번호</td>
                    <td>제목</td>
                    <td>글쓴이</td>
                    <td>날짜</td>
                    <td>조회수</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>

export default ({
    name: 'listTable'
})
</script>

<style scoped>
    table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #ccc;
        text-align: center;
    }
    table td {
        border: 1px solid #ccc;
    }
    
</style>


