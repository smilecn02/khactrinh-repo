<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="ExcelDataSource._Default" %>


<asp:Content runat="server" ID="BodyContent" ContentPlaceHolderID="MainContent">
    
    <asp:DropDownList ID="ddlSlno" runat="server"
        OnSelectedIndexChanged="ddlSlno_SelectedIndexChanged"
        AutoPostBack="true" AppendDataBoundItems="True">
        <asp:ListItem Selected="True"
            Value="Select">- Select -</asp:ListItem>
    </asp:DropDownList>

    <asp:GridView ID="grvData" runat="server">
    </asp:GridView>

    <asp:Label ID="lblError" runat="server" />

</asp:Content>
