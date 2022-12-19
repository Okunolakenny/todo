function TodoArea() {
    let content = $(`
        <div class="area">
            <div class="all">
                <input type="checkbox" class="select-all">
                <button class="delete-all">Delete All</button>
            </div>
            <h1>Todo</h1>
            <div class="inputArea">
                <input type="text" class="input">
                <button class="add">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
            <div class="todos">
            </div>
        </div>
    `)
    $("main").append(content)
    $(".add").attr("disabled", true)
    $(".input").on('input', function() {
        if ($(this).val().length === 0) {
            $(".add").attr("disabled", true)
        }else{
            $(".add").attr("disabled", false)
        }
    })
    $(".select-all").on('input', function () {
        if (($(this).prop("checked"))) {
            selectAll()
        }
        else{
            uncheckAll()
        }
    })
    $(".delete-all").click(function () {
        let allTask = ($(".todo").find("#checker"));
        allTask.each((i,el)=>{
            let checked = $(el).prop("checked");
            checked && $(el).parent().remove()
        })
        
        
        // if (($(".todo").find("#checker").prop("checked"))) {
        //     delAll()
        // }
        $(".select-all").prop({checked: false})
    })
    $(".add").click(addTodo)
}
function selectAll() {
    $(".todo").children("#checker").attr("checked", true)
}
function uncheckAll() {
    $(".todo").children("#checker").attr("checked", false)
}
function delAll() {
    $(".todo").children("#checker").attr("checked", true).parent().remove()
    $(".select-all").attr("checked", false)
}
function addTodo() {
    $(".add").attr("disabled", true)
    let text =  $(".area").find(".input").val()
    $(".area").find(".input").val("")
    let content = $(`
    <div class="todo">
        <input type="checkbox" id="checker">
        <p class="task">${text}</p>
        <span class="trash">
        <i class="fas fa-trash-can del"></i>
        </span>
        </div>
        `)
        $(".area").find(".todos").prepend(content)
        $("#checker").on('change', function () {
            let trash = $(this).parent().find(".trash")
            if (($(this).prop("checked"))) {
                trash.show()
                console.log("Done");
                trash.click(function () {
                    $(this).parent().remove()
                })
            }
            else{
                trash.hide()
            }
        })
        let allTask = ($(".todo").find("#checker"));
        console.log(allTask);
        allTask.each((i, el) => {
            el.on('input', function () {
                console.log(el + "Checked");
            })
        })
}
TodoArea()