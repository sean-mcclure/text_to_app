function detect(msg) {

    if(az.grab_value("my_textarea", 1) !== "") {
    
    if(msg.includes("columns")) {
        var res = msg.slice(0, msg.indexOf("columns")).trim().split(" ")
        col_num = res[res.length-1]
        az.hold_value.col_num = col_num
    }

    if(msg.includes("column")) {
        var res = msg.slice(0, msg.indexOf("column")).trim().split(" ")
        col_num = res[res.length-1]
        az.hold_value.col_num = col_num
    }

    if(msg.includes("rows")) {
        var res = msg.slice(0, msg.indexOf("rows")).trim().split(" ")
        row_num = res[res.length-1]
        az.hold_value.row_num = row_num
    }

    if(msg.includes("row")) {
        var res = msg.slice(0, msg.indexOf("row")).trim().split(" ")
        row_num = res[res.length-1]
        az.hold_value.row_num = row_num
    }

    if(msg.includes("cell")) {
        var res = msg.slice(0, msg.indexOf("cell")).trim().split(" ")
        cell_num = res[res.length-1]
        if(cell_num == "first") {
            az.hold_value.cell_num = 1
        }
        if(cell_num == "second") {
            az.hold_value.cell_num = 2
        }
        if(cell_num == "third") {
            az.hold_value.cell_num = 3
        }
        if(cell_num == "fourth") {
            az.hold_value.cell_num = 4
        }
        if(cell_num == "fifth") {
            az.hold_value.cell_num = 5
        }
        if(cell_num == "sixth") {
            az.hold_value.cell_num = 6
        }
        if(cell_num == "seventh") {
            az.hold_value.cell_num = 7
        }
        if(cell_num == "eighth") {
            az.hold_value.cell_num = 8
        }
        if(cell_num == "ninth") {
            az.hold_value.cell_num = 9
        }
    }
 
    if(msg.includes("layout")) {
        
        az.add_layout("my_section", 1, {
            "this_class": "my_layout",
            "row_class": "my_layout_rows",
            "cell_class": "my_layout_cells",
            "number_of_rows": az.hold_value.row_num,
            "number_of_columns": az.hold_value.col_num
        })
    }
    if(msg.includes("button")) {
        az.add_button("my_layout_cells", az.hold_value.cell_num, {
            "this_class" : "my_button",
            "text" : "BUTTON"
        })
    }
    az.clear_input("my_textarea", 1)
    az.focus_element("my_textarea", 1)

} else {
    az.animate_element("my_textarea", 1, {
        "type" : "rubberBand"
    })
}
}