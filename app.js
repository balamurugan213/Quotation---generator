var app = angular.module('qgApp', []);

app.controller("quotation", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Do";

    $scope.name="ph";
    $scope.quantity=10;
    $scope.rate=100;


    $scope.addData=function(){
        $scope.quot.push({
            name      : $scope.name ,
            quantity  : $scope.quantity,
            rate      : $scope.rate
        })
        $scope.name = ''
        $scope.quantity = ''
        $scope.rate = ''

        console.log($scope.quot)

    }
    
    $scope.quot=[
        {
            "name":'comp',
            "quantity":5,
            "rate":500
        },
        {
            "name":'modem',
            "quantity":2,
            "rate":600
        },
        {
            "name":'book',
            "quantity":3,
            "rate":400
        }
    ]    


    $scope.makePdf=function(){ 
        
        var doc = {
            content: [
                {text: 'Tables', style: 'header'},
                {text: 'A simple table ', style: 'subheader'},
                {
                    table: {
                        body: [
                            ['Column 1', 'Column 2', 'Column 3'],
                            ['One value goes here', 'Another one here', 'OK?']
                        ]
                    }
                },
            ]
        }

        var l={}
        var x=["Name","Quantity","rate","Amount"]
        l.content=[]
        l.content.push({text: 'Tables', style: 'header'});
        l.content.push({table:{body:[]}});
        l.content[1].table.body.push(x);
        let total=0
        for(var i=0;i<$scope.quot.length;i++)
        {
            a=[]
            
            a.push($scope.quot[i].name)
            a.push($scope.quot[i].quantity)
            a.push($scope.quot[i].rate)
            a.push($scope.quot[i].rate * $scope.quot[i].quantity)
            total=total+$scope.quot[i].rate * $scope.quot[i].quantity
            l.content[1].table.body.push(a);
        }
        to=[]
        to.push(" ")
        to.push(" ")
        to.push("Total")
        to.push(total)
        l.content[1].table.body.push(to);
        console.log(l.content)
        pdfMake.createPdf(l).open();
    }

});