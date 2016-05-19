<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="ReadExcelInToDataSet.Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:DropDownList ID="ddlSlno" runat="server" OnSelectedIndexChanged="ddlSlno_SelectedIndexChanged"
            AutoPostBack="true" AppendDataBoundItems="True">
            <asp:ListItem Selected="True" Value="Select">- Select -</asp:ListItem>
        </asp:DropDownList>
        <asp:GridView ID="grvData" runat="server">
        </asp:GridView>
        <asp:Label ID="lblError" runat="server" />
    </div>
    </form>
</body>
</html>
